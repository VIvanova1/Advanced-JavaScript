function calculator() {
    let num1;
    let num2;
    let result;

    function init(selector1, selector2, resultSelector) {

        num1 = document.querySelector(selector1);
        num2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);

        return myObj = {
            num1,
            num2,
            result
        }
    };

    function add() {
        myObj.result.value = Number(myObj.num1.value) + Number(myObj.num2.value);

    };

    function subtract() {
        myObj.result.value = Number(myObj.num1.value) - Number(myObj.num2.value);
    }

    return {
        init,
        add,
        subtract

    }
}