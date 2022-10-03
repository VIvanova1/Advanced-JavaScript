function getFibonator() {
    const result = [];

    function calcFib() {
        let tempNum = 0;
        if (result.length < 2) {
            tempNum = 1;
        } else {
            tempNum = Number(result[result.length - 1]) + Number(result[result.length - 2])
        }
        result.push(tempNum)
        return tempNum;
    }
    return calcFib;

}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13