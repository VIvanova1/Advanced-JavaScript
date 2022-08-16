function toggle() {
    const btnT = document.getElementsByClassName("button")[0]
    const moreText = document.getElementById('extra');
    moreText.style.display = 'block';

    if (btnT.textContent === 'More') {
        moreText.style.display = 'block';
        btnT.textContent = 'Less';
        console.log(1);
    } else {
        moreText.style.display = 'none';
        btnT.textContent = 'More';
        console.log(2);
    }

}