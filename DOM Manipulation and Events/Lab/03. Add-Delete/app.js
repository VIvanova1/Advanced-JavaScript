function addItem() {
    const liElement = document.createElement("li");
    const content = document.getElementById("newItemText").value;
    liElement.textContent = content;
    const ul = document.getElementById("items");
    ul.appendChild(liElement);
    document.getElementById("newItemText").value = '';

    const del = document.createElement('a');
    del.textContent = "[Delete]";
    del.href = "#";
    liElement.appendChild(del);

    del.addEventListener('click', deleteFunc);

    function deleteFunc() {
        liElement.remove();
    }
}