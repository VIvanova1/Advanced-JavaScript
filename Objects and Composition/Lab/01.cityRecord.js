function cityRecord(name, population, treasury) {

    return city = {
        name,
        population,
        treasury
    }
}
//'---Test 1---';
console.log(cityRecord('Tortuga',
    7000,
    15000))

/* Result
{
  name: 'Tortuga',
  population: 7000,
  treasury: 15000
}
*/

//'---Test 2---';
console.log(cityRecord('Santo Domingo',
    12000,
    23500))

/* Result
{
  name: 'Santo Domingo',
  population: 12000,
  treasury: 23500
}
*/