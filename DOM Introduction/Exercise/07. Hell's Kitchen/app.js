// function solve() {
//     document.querySelector('#btnSend').addEventListener('click', onClick);

//     function onClick() {
//         const restaurants = {};

//         const inputArea = document.querySelector('textarea').value;
//         const input = inputArea.split('"');

//         for (let i = 1; i < input.length; i += 2) {
//             const [restaurantName, allWorkers] = input[i].split(' - ');

//             workers = allWorkers.split(', ');
//             let averageSalary = 0;
//             for (const person of workers) {
//                 let [personName, salary] = person.split(' ');

//                 if (!restaurants.hasOwnProperty(restaurantName)) {
//                     restaurants[restaurantName] = {};
//                 }
//                 restaurants[restaurantName][personName] = salary;

//                 averageSalary += Number(salary)
//             }
//             averageSalary /= workers.length;
//             restaurants[restaurantName].averageSalary = averageSalary;
//         }


//         let sortedRestaurants = Object.entries(restaurants).sort(([keyA, valueA], [keyB, valueB]) => {
//             return valueB.averageSalary - valueA.averageSalary;
//         });

//         const bestRes = document.querySelector('div#bestRestaurant span');
//         const bestResWorkes = document.querySelector('div#workers span');

//         let workersObj = Object.entries(sortedRestaurants[0][1]);
//         workersObj.pop()

//         bestRes.textContent = `Name: ${sortedRestaurants[0][0]} Average Salary: ${(sortedRestaurants[0][1].averageSalary).toFixed(2)} Best Salary: ${Number(workersObj[0][1]).toFixed(2)}`

//         bestResWorkes = []
//         for (const person of workersObj) {
//             bestResWorkes.push(`Name: ${person[0]} With Salary ${person[1]}`)
//         }
//         bestResWorkes.textContent = bestResWorkes.join(' ')
//     }

// }

function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        let input = JSON.parse(document.querySelector("textarea").value);

        let averageSalary = 0;
        let restaurants = {};
        for (const line of input) {
            let [restaurantName, workers] = line.split(' - ');

            let workerInfo = workers.split(', ')

            for (const worker of workerInfo) {
                let [name, salary] = worker.split(' ')
                if (!restaurants.hasOwnProperty(restaurantName)) {
                    restaurants[restaurantName] = {};
                }
                restaurants[restaurantName][name] = salary;

            }


        }
    }
}