function createFormatter(val1, val2, val3, currencyFormatter) {

    let separator = val1;
    let symbol = val2;
    let symbolFirst = val3;

    return function(value) {
        return currencyFormatter(separator, symbol, symbolFirst, value)
    }
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
};
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345)); // $ 5345,00

console.log(dollarFormatter(3.1429)); // $ 3,14

console.log(dollarFormatter(2.709)); // $ 2,71