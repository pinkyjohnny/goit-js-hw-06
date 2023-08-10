
const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur)

  function onInputBlur() {
  if (input.value.length >= input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

// const validationInput = document.querySelector('#validation-input');

// validationInput.addEventListener('blur', () => {
//   if (validationInput.value.length === parseInt(validationInput.dataset.length)) {
//     validationInput.classList.add('valid');
//     validationInput.classList.remove('invalid');
//   } else {
//     validationInput.classList.add('invalid');
//     validationInput.classList.remove('valid');
//   }
// });

// const validationInput = document.querySelector('#validation-input');

// document.addEventListener('DOMContentLoaded', () => {
//   validationInput.addEventListener('blur', () => {
//     if (validationInput.value.length === parseInt(validationInput.dataset.length)) {
//       validationInput.classList.add('valid');
//       validationInput.classList.remove('invalid');
//     } else {
//       validationInput.classList.add('invalid');
//       validationInput.classList.remove('valid');
//     }
//   });
// });

// const input = document.querySelector("#validation-input");

// input.addEventListener('blur', onInputBlur);

// function onInputBlur() {
//     if (input.value.length === parseInt(input.dataset.length)) {
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//     } else {
//         input.classList.add('invalid');
//         input.classList.remove('valid');
//     }
// }
