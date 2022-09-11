function attachGradientEvents() {

    const boxElement = document.getElementById("gradient");
    const resultElement = document.getElementById("result");

    boxElement.addEventListener('mousemove', (e) => {
        let procent = Math.floor(e.offsetX / 300 * 100)
        resultElement.textContent = procent + '%'
    });
}