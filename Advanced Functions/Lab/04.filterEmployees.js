function solve(data, criteria) {
    const input = JSON.parse(data);
    const [type, string] = criteria.split('-');
    const result = [];

    for (const line of input) {
        if (line[type] === string || criteria === 'all') {
            let tempRes = `${line.first_name} ${line.last_name} - ${line.email}`
            result.push(tempRes)
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(`${i}. ${result[i]}`);
    }

}
solve(`[
    {
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  },

  {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },

{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }
]`,
    'all')