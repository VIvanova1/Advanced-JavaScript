function search() {
    const searchInfo = document.getElementById('searchText').value;
    const result = [];
    let counter = 0;
    const lists = Array.from(document.querySelectorAll('li'))
        .forEach((el) => {
            el.style.textDecoration = "none";
            el.style.fontWeight = "normal";
            if (el.textContent.includes(searchInfo)) {
                el.style.textDecoration = "underline";
                el.style.fontWeight = "bold";
                counter++;
            }
        })
    const matches = document.getElementById('result');
    matches.textContent = `${counter} matches found`;
    document.getElementById('searchText').value = '';

}