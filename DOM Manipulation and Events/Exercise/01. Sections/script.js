function create(words) {
    const parentDiv = document.getElementById('content');


    const input = words;
    for (let i = 1; i <= input.length; i++) {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');

        pElement.textContent = `Section ${i}`;
        pElement.style.display = "none";

        divElement.appendChild(pElement);
        parentDiv.appendChild(divElement);

        divElement.addEventListener('click', () => {
            pElement.style.display = "block";
        });
    }
}