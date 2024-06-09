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

// Убирает интерактив при клике вне аккордеонов
const accordeon1 = document.querySelector("#accordeon-1");
const accordeon2 = document.querySelector("#accordeon-2");

document.addEventListener("click", (e) => {
  const inAccordeon1 = e.composedPath().includes(accordeon1);
  const inAccordeon2 = e.composedPath().includes(accordeon2);

  if (!inAccordeon1 && !inAccordeon2) {
    accordeonList.forEach((list) => {
      list.classList.remove("filter__accordeon-list--active");
    });
  }
});
