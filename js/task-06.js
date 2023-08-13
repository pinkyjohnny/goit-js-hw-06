
const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur)

function onInputBlur() {
  const inputValue = input.value.length;
  const dataLength = parseInt(input.dataset.length, 10);

  if (inputValue === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
