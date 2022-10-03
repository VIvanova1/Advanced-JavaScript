function sortArray(input, type) {

    let sortArr = input.sort((a, b) => {
        if (type === 'asc') {
            return a - b;
        } else if (type === 'desc') {
            return b - a;
        }
    });
    return sortArr;
}
sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc')