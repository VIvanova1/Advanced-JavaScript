window.addEventListener("load", solve);

function solve() {
    let totalPrices = 0;
    const allInputFields = Array.from(document.querySelectorAll('form input, form select'));
    allInputFields.forEach((el) => {
        el.setAttribute('required', '');
    });

    const makeInputEl = document.getElementById('make');
    const modelInputEl = document.getElementById('model');
    const yearInputEl = document.getElementById('year');
    const fuelInputEl = document.getElementById('fuel');
    const originalCostInputEl = document.getElementById('original-cost');
    const sellCostInputEl = document.getElementById('selling-price');
    const publishButtonEl = document.getElementById('publish');

    const carsListElement = document.getElementById('cars-list');

    publishButtonEl.addEventListener('click', (e) => {
        if (Number(originalCostInputEl.value) > Number(sellCostInputEl.value)) {
            return;
        };

        const makeTdEl = document.createElement('td');
        const modelTdEl = document.createElement('td');
        const yearTdEl = document.createElement('td');
        const fuelTdEl = document.createElement('td');
        const originalCostTdEl = document.createElement('td');
        const sellCostTdEl = document.createElement('td');
        const buttonsTdEl = document.createElement('td');
        const editBtnEl = document.createElement('button');
        const sellBtnEl = document.createElement('button');

        const rowParrentEl = document.createElement('tr');
        rowParrentEl.classList.add('row');

        makeTdEl.textContent = makeInputEl.value;
        rowParrentEl.appendChild(makeTdEl);

        modelTdEl.textContent = modelInputEl.value;
        rowParrentEl.appendChild(modelTdEl);

        yearTdEl.textContent = yearInputEl.value;
        rowParrentEl.appendChild(yearTdEl);

        fuelTdEl.textContent = fuelInputEl.value;
        rowParrentEl.appendChild(fuelTdEl);

        originalCostTdEl.textContent = originalCostInputEl.value;
        rowParrentEl.appendChild(originalCostTdEl);

        sellCostTdEl.textContent = sellCostInputEl.value;
        rowParrentEl.appendChild(sellCostTdEl);

        editBtnEl.textContent = 'Edit'
        editBtnEl.classList.add('edit');
        editBtnEl.classList.add('action-btn');

        editBtnEl.addEventListener('click', editFnc)



        buttonsTdEl.appendChild(editBtnEl);

        sellBtnEl.classList.add('sell');
        sellBtnEl.classList.add('action-btn');
        sellBtnEl.textContent = 'Sell';


        sellBtnEl.addEventListener('click', (e) => {
            const liElement = document.createElement('li');
            liElement.classList.add('each-list')

            const spanForModel = document.createElement('span');
            spanForModel.textContent = `${makeTdEl.textContent} ${modelTdEl.textContent}`
            liElement.appendChild(spanForModel);

            const spanForYear = document.createElement('span');
            spanForYear.textContent = yearTdEl.textContent;
            liElement.appendChild(spanForYear);


            const totalPrice = document.createElement('span');
            totalPrice.textContent = Number(sellCostTdEl.textContent) - Number(originalCostTdEl.textContent);
            totalPrices += Number(totalPrice.textContent);
            liElement.appendChild(totalPrice);

            carsListElement.appendChild(liElement)
            e.currentTarget.parentElement.parentElement.remove()

            const totalProfit = document.getElementById('profit');
            totalProfit.textContent = totalPrices.toFixed(2);
        });

        buttonsTdEl.appendChild(sellBtnEl);

        rowParrentEl.appendChild(buttonsTdEl);

        const tbodyElement = document.getElementById('table-body');
        tbodyElement.appendChild(rowParrentEl);

        allInputFields.forEach((el) => {
            el.value = '';
        });


        function editFnc() {
            editBtnEl.parentElement.parentElement.remove()
            makeInputEl.value = makeTdEl.textContent;
            modelInputEl.value = modelTdEl.textContent;
            yearInputEl.value = yearTdEl.textContent;
            fuelInputEl.value = fuelTdEl.textContent;
            originalCostInputEl.value = originalCostTdEl.textContent;
            sellCostInputEl.value = sellCostTdEl.textContent;

        };

    });


}