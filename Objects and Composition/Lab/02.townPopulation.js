function townPopulation(data) {
    const towns = {}
    for (const line of data) {
        let [name, population] = line.split(' <-> ');
        population = Number(population);
        if (towns.hasOwnProperty(name)) {
            population += towns[name]
        }
        towns[name] = population;
    }

    for (const [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }
}
//'---Test 1---';
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])

/* Result
Sofia : 1200000
Montana : 20000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
*/

//'---Test 2---';
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])

/* Result
Istanbul : 101000
Honk Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
*/