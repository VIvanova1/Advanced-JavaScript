function pieceOfPie(array, start, end) {
    let res = array.slice(array.indexOf(start), array.indexOf(end) + 1);
    console.log(res);

}
console.log('---Test 1---');
pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie')

/* Result
['Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie']
*/

console.log('---Test 2---');
pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie')

/* Result
['Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie']
*/