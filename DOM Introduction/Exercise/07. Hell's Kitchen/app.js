function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const restaurants = {};

        const inputArea = document.querySelector('textarea').value;
        const input = inputArea.split('"');

        for (let i = 1; i < input.length; i += 2) {
            const [restaurantName, allWorkers] = input[i].split(' - ');

            workers = allWorkers.split(', ');
            let averageSalary = 0;
            for (const person of workers) {
                let [personName, salary] = person.split(' ');

                if (!restaurants.hasOwnProperty(restaurantName)) {
                    restaurants[restaurantName] = {};
                }
                restaurants[restaurantName][personName] = salary;

                averageSalary += Number(salary)
            }
            averageSalary /= workers.length;
            restaurants[restaurantName].averageSalary = averageSalary;
        }


        let sortedRestaurants = Object.entries(restaurants).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueB.averageSalary - valueA.averageSalary;
        });

        const bestRes = document.querySelector('div#bestRestaurant span');
        const bestResWorkes = document.querySelector('div#workers span');

        let workersObj = Object.entries(sortedRestaurants[0][1]);
        workersObj.pop()

        bestRes.textContent = `Name: ${sortedRestaurants[0][0]} Average Salary: ${(sortedRestaurants[0][1].averageSalary).toFixed(2)} Best Salary: ${Number(workersObj[0][1]).toFixed(2)}`

        bestResWorkesResult = []
        for (const person of workersObj) {
            bestResWorkesResult.push(`Name: ${person[0]} With Salary ${person[1]}`)
        }
        bestResWorkes.textContent = bestResWorkesResult.join(' ')
    }

}