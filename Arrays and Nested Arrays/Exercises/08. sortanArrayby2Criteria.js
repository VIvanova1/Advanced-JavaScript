function sortTwoCriteria(input) {

    let sortedInput = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    console.log(sortedInput.join('\n'));
}
sortTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
    //result Jack Isacc George Theodor Harrison