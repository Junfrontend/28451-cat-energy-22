let closeButton = document.querySelector('.header__toggle');
let menu = document.querySelector('.header__nav');
closeButton.onclick = function () {
  menu.classList.toggle('header__nav--closed');
  closeButton.classList.toggle('header__toggle--closed');
}

let purposeCheckbox = document.querySelectorAll('.purpose__checkbox');
document.addEventListener("DOMContentLoaded", () => {
  closeButton.style.display = "block";
  closeButton.classList.remove('header__toggle--closed');
  menu.classList.add('header__nav--closed');
});

let beforeAndAfterImgButton = document.querySelector('.toggle-wrapper__toggle-button');
let counter = 0;
beforeAndAfterImgButton.addEventListener("click", () => {
let catImgBefore = document.querySelector(".cat-range__img--first");
let catImgAfter = document.querySelector(".cat-range__img--second");
counter++;
  beforeAndAfterImgButton.classList.toggle('toggle-wrapper__toggle-button--checked');
  if (counter % 2 !== 0) {
    catImgAfter.classList.remove("cat-range__img--hidden");
    catImgBefore.classList.add("cat-range__img--hidden");
  } else {
    catImgAfter.classList.add("cat-range__img--hidden");
    catImgBefore.classList.remove("cat-range__img--hidden");
  }
});
