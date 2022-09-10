function deleteByEmail() {
    const email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
    for (const td of secondColumn) {
        if (td.textContent === email) {
            let row = td.parentElement;
            row.parentElement.removeChild(row);
            document.getElementById('result').textContent = "Deleted.";
        } else {
            document.getElementById('result').textContent = "Not found."
        }
    }
}