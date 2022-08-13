function daysInAMonth(month, year) {
    let day = new Date(year, month, 0).getDate();
    return day
}
//---Test---
console.log(daysInAMonth(1, 2012));

/* Result
31
*/

//---Test---
console.log(daysInAMonth(2, 2021));

/* Result
28
*/