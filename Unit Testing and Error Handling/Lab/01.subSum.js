function testing(arr, start, end) {
    //TEST if the input is not an Array
    if (!Array.isArray(arr)) {
        return NaN;
    }
    // clamp number
    if (start < 0) {
        start = 0;
    }
    //Test if the end is bigger then array length
    if (end > arr.length - 1) {
        end = arr.length - 1
    }


    // First we make the main logic
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i])
    }
    return sum

}
console.log(testing([10, 20, 30, 40, 50, 60], 3, 300))
console.log(testing([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(testing([10, 'twenty', 30, 40], 0, 2))
console.log(testing([], 1, 2))
console.log(testing('text', 0, 2))