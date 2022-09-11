function solve() {
    const addElements = document.querySelectorAll('.product-add .add-product');
    const resultTextAreaElement = document.getElementsByTagName('textarea')[0];
    const checkoutButton = document.getElementsByClassName('checkout')[0];

    const productArray = [];
    const priceArray = [];

    for (const el of addElements) {
        el.addEventListener('click', () => {
            const currentProduct = el.parentNode.parentNode;
            const products = Array.from(currentProduct.children);

            const productName = products[1].children[0].textContent;
            const price = products[3].textContent;

            productArray.push(productName);
            priceArray.push(price);
            console.log(priceArray);
            resultTextAreaElement.textContent += `Added ${productName} for ${price} to the cart. \n`
        });
    };


    checkoutButton.addEventListener('click', () => {

        let totalPrice = 0;
        priceArray.forEach((x) => {
            totalPrice += Number(x)
        });

        resultTextAreaElement.textContent += `You bought ${productArray.join(', ')} for ${totalPrice.toFixed(2)}.`

        addElements.forEach((add) => {
            add.setAttribute("disabled", "");
        });
        checkoutButton.setAttribute("disabled", "");

    });
}