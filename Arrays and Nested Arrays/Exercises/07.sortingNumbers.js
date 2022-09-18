function sortingNumbers(input) {

    let sortedInput = input.sort((a, b) => {
        return Number(a) - Number(b)
    });
    for (let i = 0; i < sortedInput.length; i += 2) {
        let tempNum = sortedInput.pop();
        sortedInput.splice(i + 1, 0, tempNum)
    }
    return sortedInput;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//result [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]