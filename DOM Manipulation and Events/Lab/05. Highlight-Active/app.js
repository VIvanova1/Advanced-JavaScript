function focused() {
    const inputElements = document.querySelectorAll('input');

    for (const el of inputElements) {
        const divElementClass = el.parentNode;
        el.addEventListener('focus', (e) => {

            divElementClass.className = 'focused';
        });

        el.addEventListener('blur', (e) => {
            divElementClass.className = ' ';
        });
    }
}