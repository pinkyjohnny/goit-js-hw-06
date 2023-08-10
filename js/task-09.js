function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorChahgeBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const backgroundColor = document.querySelector("body")


colorChahgeBtn.addEventListener('click', onColorChangeBtnClick)

function onColorChangeBtnClick() {
  const randomColor = getRandomHexColor();
  backgroundColor.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}



