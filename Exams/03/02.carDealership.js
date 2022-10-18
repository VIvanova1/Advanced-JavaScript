class CarDealership {
    constructor(name) {
        this.name = name,
            this.availableCars = [],
            this.soldCars = [],
            this.totalIncome = 0
    };

    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        };

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage,
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    };

    sellCar(model, desiredMileage) {
        const carIndex = this.availableCars.findIndex(c => c.model == model);
        if (carIndex == -1) {
            throw new Error(`${model} was not found!`);
        };
        const car = this.availableCars[carIndex];
        let diffMileage = car.mileage - desiredMileage;
        if (car.mileage <= desiredMileage) {
            car.price = car.price;
        } else if (diffMileage <= 40000) {
            car.price *= 0.95;
        } else {
            car.price *= 0.9;
        };

        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({
            model,
            horsepower: car.horsepower,
            soldPrice: car.price,
        });
        this.totalIncome += car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`

    };

    currentCar() {
        if (this.availableCars.length <= 0) {
            return 'There are no available cars';
        }
        const carsAsString = this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`).join('\n');
        return [
            '-Available cars:',
            carsAsString
        ].join('\n');

    };

    salesReport(criteria) {
        let sortCarsSold;
        if (criteria == 'horsepower') {
            sortCarsSold = this.soldCars.sort((a, b) => {
                return b.horsepower - a.horsepower;
            });
        } else if (criteria == 'model') {
            sortCarsSold = this.soldCars.sort((a, b) => {
                return a.model.localeCompare(b.model);
            });
        } else {
            throw new Error('Invalid criteria!');
        };
        const carsAsString = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`).join('\n');
        return [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`,
            carsAsString
        ].join('\n')
    }
}

let dealership = new CarDealership('SoftAuto');

console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000))

console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000))

console.log(dealership.addCar('Audi A3', 120, 4900, 240000))

console.log(dealership.sellCar('Toyota Corolla', 230000));

console.log(dealership.sellCar('Mercedes C63', 110000));
console.log(dealership.currentCar());
console.log(dealership.salesReport('horsepower'));