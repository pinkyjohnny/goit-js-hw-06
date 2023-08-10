const formInput = document.querySelector(".login-form");

formInput.addEventListener('submit', onFormInputSubmit);

function onFormInputSubmit(evt) {
    evt.preventDefault();

    const emailInput = evt.target.elements.email.value;
    const passwordInput = evt.target.elements.password.value;


    if (emailInput === "" || passwordInput === "") {
        alert("All fields must be filled in.");
    } else {
        let formData = {
            email: emailInput,
            password: passwordInput
        }

        console.log(formData);
        this.reset()

    }

}


