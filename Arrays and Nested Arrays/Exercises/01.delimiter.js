function delimiter(input, delimeter) {
    let result = input.join(delimeter);
    console.log(result);

}
delimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-')