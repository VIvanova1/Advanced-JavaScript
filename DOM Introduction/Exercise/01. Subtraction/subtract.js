function subtract() {
    const result = Number(document.getElementById('firstNumber').value) -
        Number(document.getElementById('secondNumber').value);

    const divElement = document.getElementById('result');
    divElement.textContent = result;
}