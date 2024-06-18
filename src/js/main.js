// Аккордеон в фильтре
const accordeon = document.querySelectorAll(".filter__accordeon");
const accordeonList = document.querySelectorAll(".filter__accordeon-list");
const accordeon1 = document.querySelector("#accordeon-1");
const accordeon2 = document.querySelector("#accordeon-2");
const accordeonList1 = document.querySelector("#accordeon-list-1");
const accordeonList2 = document.querySelector("#accordeon-list-2");

// Клик на "Локации для тура"
accordeon1.addEventListener("click", function () {
  accordeonList2.classList.remove("filter__accordeon-list--active");
  accordeonList1.classList.toggle("filter__accordeon-list--active");
  rotateIconAccord(this);
});

// Клик на "Участники"
accordeon2.addEventListener("click", function () {
  accordeonList1.classList.remove("filter__accordeon-list--active");
  accordeonList2.classList.toggle("filter__accordeon-list--active");
  rotateIconAccord(this);
});

// Поворот стрелки у аккордеонов при клике
function rotateIconAccord(e) {
  if (
    e.nextElementSibling.classList.contains("filter__accordeon-list--active")
  ) {
    e.querySelector(".filter__accordeon-img").classList.add(
      "filter__accordeon-img--active"
    );
  } else {
    e.querySelector(".filter__accordeon-img").classList.remove(
      "filter__accordeon-img--active"
    );
  }
}

// Убирает интерактив при клике вне аккордеонов
document.addEventListener("click", (e) => {
  const inAccordeon1 = e.composedPath().includes(accordeon1);
  const inAccordeon2 = e.composedPath().includes(accordeon2);

  if (!inAccordeon1 && !inAccordeon2) {
    accordeonList.forEach((list) => {
      list.classList.remove("filter__accordeon-list--active");
    });
  }
  rotateIconAccord(accordeon1);
  rotateIconAccord(accordeon2);
});

// Заменяет содержимое аккордеона при клике на его селекты
const accordeonItem = document.querySelectorAll(".filter__accordeon-item");

accordeonItem.forEach((item) => {
  item.addEventListener("click", function () {
    const list = this.closest(".filter__accordeon-list");

    list.previousElementSibling.querySelector(
      ".filter__accordeon-inner"
    ).textContent = this.textContent;

    list.classList.remove("filter__accordeon-list--active");

    rotateIconAccord(accordeon1);
    rotateIconAccord(accordeon2);
  });
});

// Изменение карточки при наведении
const card = document.querySelectorAll(".card");
const cardInner = document.querySelectorAll(".card__inner-content");
const cardRating = document.querySelectorAll(".card__rating");

card.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.querySelector(".card__inner-content").classList.add(
      "card__inner-content--active"
    );
    this.querySelector(".card__rating").classList.add("card__rating--active");
  });
});

card.forEach((card) => {
  card.addEventListener("mouseleave", function () {
    this.querySelector(".card__inner-content").classList.remove(
      "card__inner-content--active"
    );
    this.querySelector(".card__rating").classList.remove(
      "card__rating--active"
    );
  });
});

// Модальное окно для галереи fancybox
Fancybox.bind('[data-fancybox="gallery"]', {});

// Бургер меню
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu--active");
  burger.classList.toggle("burger--active");
  // Убирает прокрутку при расскрытом меню бургера
  if (burger.classList.contains("burger--active")) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "scroll";
  }
});
