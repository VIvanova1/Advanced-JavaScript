function addItem() {
    const newTextInput = document.getElementById('newItemText');
    const newValueInput = document.getElementById('newItemValue');

    const newElement = document.createElement('option');
    newElement.textContent = newTextInput.value;

    newElement.value = newValueInput.value;

    const parentElement = document.getElementById('menu');
    parentElement.appendChild(newElement);

    newTextInput.value = '';
    newValueInput.value = '';
}