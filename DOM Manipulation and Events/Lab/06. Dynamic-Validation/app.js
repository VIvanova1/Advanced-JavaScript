function validate() {
    const emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', (e) => {

        const pattern = /[a-z]+[@][a-z]+[.][a-z]+/;

        if (!pattern.test(emailInputElement.value)) {
            emailInputElement.className = 'error';
        } else {
            emailInputElement.className = ' ';
        }
    });
}