const inputElem = document.querySelector('#name-input')
const nameSpan = document.querySelector('#name-output')

inputElem.addEventListener('input', onInputElemInput)

function onInputElemInput(input) {
    if (inputElem.value) {
        nameSpan.textContent = inputElem.value
    } else {
        nameSpan.textContent = 'Anonymous';
    }


}