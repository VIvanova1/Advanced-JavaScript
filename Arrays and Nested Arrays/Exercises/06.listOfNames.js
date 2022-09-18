function listOfNames(input) {
    let sortedInput = input.sort((a, b) => {
        return a.localeCompare(b);

    });
    for (let i = 0; i < sortedInput.length; i++) {
        console.log(i + 1 + "." + sortedInput[i]);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])