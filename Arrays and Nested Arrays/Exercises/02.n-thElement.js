function printingEl(input, steps) {
    const result = []
    for (let i = 0; i < input.length; i += steps) {
        result.push(input[i]);
    }
    return result;
}
console.log(printingEl(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2));