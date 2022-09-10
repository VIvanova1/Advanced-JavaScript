function addItem() {
    const els = document.getElementById("items");
    const newEL = document.createElement("li")
    els.appendChild(newEL);
    newEL.textContent = document.getElementById("newItemText").value;
}