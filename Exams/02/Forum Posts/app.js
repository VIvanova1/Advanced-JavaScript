window.addEventListener("load", solve);

function solve() {
    const titleInputElement = document.getElementById('post-title');
    const categoryInputElement = document.getElementById('post-category');
    const contentInputElement = document.getElementById('post-content');
    const publishButtonElement = document.getElementById('publish-btn');

    const ulElement = document.getElementById('review-list');

    publishButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (titleInputElement.value === '' ||
            categoryInputElement.value === '' ||
            contentInputElement.value === '') {
            return;
        };

        const liElement = document.createElement('li');
        liElement.classList.add('rpost');
        const articleElement = document.createElement('article');

        const hElement = document.createElement('h4');
        hElement.textContent = titleInputElement.value;
        articleElement.appendChild(hElement);

        const pElement = document.createElement('p');
        let category = categoryInputElement.value
        pElement.textContent = `Category: ${category}`;
        articleElement.appendChild(pElement);

        const secondPElement = document.createElement('p');
        let content = contentInputElement.value
        secondPElement.textContent = `Content: ${content}`;
        articleElement.appendChild(secondPElement);

        liElement.appendChild(articleElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('action-btn');
        editBtnElement.classList.add('edit');
        editBtnElement.textContent = 'Edit';
        editBtnElement.addEventListener('click', editing);
        liElement.appendChild(editBtnElement);

        const approveBtnElement = document.createElement('button');
        approveBtnElement.classList.add('action-btn');
        approveBtnElement.classList.add('approve');
        approveBtnElement.textContent = 'Approve';
        approveBtnElement.addEventListener('click', approving);
        liElement.appendChild(approveBtnElement);
        ulElement.appendChild(liElement);

        titleInputElement.value = ''
        categoryInputElement.value = ''
        contentInputElement.value = ''

        function editing() {
            titleInputElement.value = hElement.textContent;
            categoryInputElement.value = category;
            contentInputElement.value = content;
            liElement.remove();

        }

        function approving() {
            const uploadedElement = document.getElementById('published-list');
            uploadedElement.appendChild(liElement);
            editBtnElement.remove();
            approveBtnElement.remove();
        }

        const clearBtnElement = document.getElementById('clear-btn');
        clearBtnElement.addEventListener('click', () => {
            liElement.remove();
        });
    });
}