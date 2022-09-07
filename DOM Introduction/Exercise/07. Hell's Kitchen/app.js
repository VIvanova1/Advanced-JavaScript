function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        const input = JSON.parse(document.querySelector("textarea").value);

        let restaurants = {};

        for (const line of input) {
            let averageSalary = 0;
            let [restaurantName, workers] = line.split(' - ');

            let workerInfo = workers.split(', ')

            for (const worker of workerInfo) {
                let [name, salary] = worker.split(' ')
                if (!restaurants.hasOwnProperty(restaurantName)) {
                    restaurants[restaurantName] = {};
                }
                restaurants[restaurantName][name] = salary;
                averageSalary += Number(salary);

            }
            averageSalary /= workerInfo.length;
            restaurants[restaurantName].averageSalary = Number(averageSalary);

        }
        let sortedRestaurants = Object.entries(restaurants).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueB.averageSalary - valueA.averageSalary;
        });

        let winner = sortedRestaurants[0]
        let winnerName = winner.shift();
        let winnerAvrgS = (winner[0].averageSalary).toFixed(2);

        let sortWinner = Object.entries(winner[0]).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueB - valueA;
        });

        let winnerSalary = Number(sortWinner[0][1]);
        let firstresult = `Name: ${winnerName} Average Salary: ${winnerAvrgS} Best Salary: ${winnerSalary.toFixed(2)}`
        let resultWinner = document.querySelector('#bestRestaurant span');
        resultWinner.textContent = firstresult;


        let res = '';
        for (const winWorker of sortWinner) {
            if (winWorker[0] === 'averageSalary') {
                continue;
            }

            res += `Name: ${winWorker[0]} With Salary: ${winWorker[1]} `
        }
        let winnerWorkers = document.querySelector('#workers span');
        winnerWorkers.textContent = res;

    }

}