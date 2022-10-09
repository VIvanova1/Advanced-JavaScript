function solve() {

    const addButtonEl = document.getElementById('add');
    addButtonEl.setAttribute('type', 'submit')
    addButtonEl.addEventListener('click', add);

    function add(e) {
        const inputElements = Array.from(document.querySelectorAll('form input, form textarea'));

        inputElements.forEach((el) => {
            el.setAttribute('required', '');
        });

        const articleELement = document.createElement('article');

        const newTask = {
            "task": (textInput) => {
                const newElement = document.createElement('h3');
                newElement.textContent = textInput;
                articleELement.appendChild(newElement);

            },
            "description": (textForInput) => {
                const newElement = document.createElement('p');
                newElement.textContent = `Description: ${textForInput}`;
                articleELement.appendChild(newElement);


            },
            "date": (textForInput) => {
                const newElement = document.createElement('p');
                newElement.textContent = `Due Date: ${textForInput}`;
                articleELement.appendChild(newElement);

            },
        }

        const buttonsCreate = {
            buttonsInOpen: () => {
                const flexDivEl = document.createElement('div');
                flexDivEl.classList.add('flex');

                const startButton = document.createElement('button');
                startButton.classList.add('green');
                startButton.textContent = 'Start';
                flexDivEl.appendChild(startButton);
                startButton.addEventListener('click', start);

                const delButton = document.createElement('button');
                delButton.classList.add('red')
                delButton.textContent = 'Delete';
                flexDivEl.appendChild(delButton);
                delButton.addEventListener('click', deleteFunc)

                articleELement.appendChild(flexDivEl)
            },
            buttonsInProgress: () => {
                const flexDivEl = document.createElement('div');
                flexDivEl.classList.add('flex');

                const delButton = document.createElement('button');
                delButton.classList.add('red')
                delButton.textContent = 'Delete';
                flexDivEl.appendChild(delButton);
                delButton.addEventListener('click', deleteFunc)

                const finishButton = document.createElement('button');
                finishButton.classList.add('orange')
                finishButton.textContent = 'Finish';
                flexDivEl.appendChild(finishButton);
                finishButton.addEventListener('click', finish)

                articleELement.appendChild(flexDivEl)
            },
        }



        for (const el of inputElements) {
            const textForInput = el.value
            const idForNewTask = el.id;
            newTask[idForNewTask](textForInput);
        }

        buttonsCreate.buttonsInOpen();

        const allSections = Array.from(document.querySelectorAll('section'));
        const childrenofSections = allSections[1].children;
        childrenofSections[1].appendChild(articleELement);

        const progressParent = document.getElementById('in-progress');


        function deleteFunc() {
            articleELement.remove();

        }

        function finish() {
            allSections[3].children[1].appendChild(articleELement);
            articleELement.lastChild.remove();
        }


        function start() {
            progressParent.appendChild(articleELement);
            articleELement.lastChild.remove();
            buttonsCreate.buttonsInProgress();
        }

    }

}