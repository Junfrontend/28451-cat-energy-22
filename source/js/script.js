let closeButton = document.querySelector('.header__toggle');
let menu = document.querySelector('.header__nav');
closeButton.onclick = function () {
  menu.classList.toggle('menu-closed');
  closeButton.classList.toggle('header__toggle--closed');
}

let beforeAndAfterImg = document.querySelector('.before-and-after__img');
let beforeAndAfterImgButton = document.querySelector('.toggle-wrapper__toggle-button');
beforeAndAfterImgButton.onchange = function () {
  if (beforeAndAfterImgButton.checked) {
    beforeAndAfterImg.src = "img/cat_after_program1x.png";
  }
  else {
    beforeAndAfterImg.src = "img/cat_before_program1x.png";
  }
}
