function addAndRemoveElements(input) {
    let initialNum = 1;
    const result = [];

    for (const command of input) {
        switch (command) {
            case 'add':
                result.push(initialNum);
                break;
            case 'remove':
                result.pop();
                break;
        }
        initialNum++;
    }
    if (result.length <= 0) {
        console.log('Empty');
    } else {

        console.log(result.join('\n'));
    }

}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'
]);