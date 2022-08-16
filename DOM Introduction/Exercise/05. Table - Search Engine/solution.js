function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {

        const searchText = document.getElementById('searchField').value;

        const lists = Array.from(document.querySelectorAll('tbody tr')).forEach((e) => {
            e.classList = '';
            if (e.textContent.includes(searchText)) {
                e.classList = 'select';
            }
        })


        document.getElementById('searchField').value = '';
    }
}