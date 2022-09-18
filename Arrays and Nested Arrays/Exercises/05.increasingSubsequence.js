function increasingSubsequence(input) {
    let maxNum = input[0];

    for (let i = 0; i < input.length; i++) {
        let tempNum = input[i];

        if (tempNum < maxNum) {
            input.splice(i, 1);
            i--;
        } else {
            maxNum = tempNum;
        }
    }
    return input;
}
increasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// result [1, 3, 8, 10, 12, 24]
increasingSubsequence([20, 3, 2, 15, 6, 1]);
// result [20]