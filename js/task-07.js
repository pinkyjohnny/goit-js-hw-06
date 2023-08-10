const inputFontSize = document.querySelector("#font-size-control")
let spanText = document.querySelector("#text")

inputFontSize.addEventListener('input', onInputFontSizeInput)

function onInputFontSizeInput() {
spanText.style.fontSize = `${inputFontSize.value}px`
}
