// Аккордеон в фильтре
const accordeon = document.querySelectorAll(".filter__accordeon");
const accordeonList = document.querySelectorAll(".filter__accordeon-list");

accordeon.forEach((accord) => {
  accord.addEventListener("click", function () {
    // Скрывает все аккордионы
    accordeonList.forEach((list) => {
      list.classList.remove("filter__accordeon-list--active");
    });

    // Расскрывает выбранный аккордион
    const filterItem = this.closest(".filter__item")
      .querySelector(".filter__accordeon-list")
      .classList.toggle("filter__accordeon-list--active");
  });
});

// Убирает аккордионы при клике на дату
const dates = document.querySelector(".filter__dates");

dates.addEventListener("click", function () {
  accordeonList.forEach((list) => {
    list.classList.remove("filter__accordeon-list--active");
  });
});

// Заменяет содержимое аккордеона при клике на его селекты
const accordeonItem = document.querySelectorAll(".filter__accordeon-item");

accordeonItem.forEach((item) => {
  item.addEventListener("click", function () {
    const list = this.closest(".filter__accordeon-list");

    list.previousElementSibling.innerHTML = `
          <span class="filter__accordeon-inner">${this.textContent}</span>
          <img class="filter__accordeon-img" src="img/arrow.svg" width="20" height="20" aria-hidden="true" alt="">
      `;

    list.classList.remove("filter__accordeon-list--active");
  });
});

// Убирает интерактив при клике вне фильтра
const filter = document.querySelector(".filter");

document.addEventListener("click", (e) => {
  const inFilter = e.composedPath().includes(filter);
  if (!inFilter) {
    accordeonList.forEach((list) => {
      list.classList.remove("filter__accordeon-list--active");
    });
  }
});
