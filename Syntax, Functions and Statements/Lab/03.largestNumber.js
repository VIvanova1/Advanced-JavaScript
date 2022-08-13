function largestNumber(firstNum, secNum, thirdNum) {
    let maxNum = null;
    if (firstNum > secNum && firstNum > thirdNum) {
        maxNum = firstNum
    } else if (secNum > firstNum && secNum > thirdNum) {
        maxNum = secNum;
    } else if (thirdNum > firstNum && thirdNum > secNum) {
        maxNum = thirdNum
    }
    console.log(`The largest number is ${maxNum}.`);
}
//---Test---
largestNumber(5, -3, 16)
    /* Result
    The largest number is 16.
     */

//---Test---
largestNumber(-3, -5, -22.5)
    /* Result
    The largest number is -3.
     */