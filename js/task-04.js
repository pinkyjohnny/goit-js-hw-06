let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const valueElement = document.querySelector("#value")

decrementBtn.addEventListener('click', onDecrementBtnClick)

function onDecrementBtnClick() {
    counterValue--;
    valueElement.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrementBtnClick)

function onIncrementBtnClick() {
    counterValue += 1
    valueElement.textContent = counterValue;
}