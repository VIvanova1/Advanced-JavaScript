function rotateArray(input, steps) {
    for (let i = 0; i < steps; i++) {
        let tempEl = input.pop();
        input.unshift(tempEl)
    }
    console.log(input.join(' '));
}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)