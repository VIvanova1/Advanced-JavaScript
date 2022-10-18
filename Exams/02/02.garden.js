class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable),
            this.plants = [],
            this.storage = []
    };

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    };

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        let currentPlant = this.plants.find(p => p.plantName == plantName);

        if (currentPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        currentPlant.ripe = true;
        currentPlant.quantity += quantity;
        if (currentPlant.quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }


    }
    harvestPlant(plantName) {
        let currentPlant = this.plants.find(p => p.plantName == plantName);

        if (currentPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        const indexOfPlant = this.plants.indexOf(currentPlant);
        this.plants.splice(indexOfPlant, 1);

        this.storage.push({
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity,
        });

        this.spaceAvailable += currentPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    };

    generateReport() {
        const plantsAsString = this.plants.map(p => p.plantName).join(', ');
        const storageAsString = this.storage.map(p => `${p.plantName} (${p.quantity})`).join(', ');
        let storageMsg = 'Plants in storage: The storage is empty.';
        if (this.storage.length > 0) {
            storageMsg = `Plants in storage: ${storageAsString}`
        }

        return [
            `The garden has ${this.spaceAvailable} free space left.`,
            `Plants in the garden: ${plantsAsString}`,
            storageMsg
        ].join('\n');
    }

}
const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));

console.log(myGarden.addPlant('orange', 100));

console.log(myGarden.addPlant('cucumber', 30));

console.log(myGarden.ripenPlant('apple', 10));

console.log(myGarden.ripenPlant('orange', 1));

console.log(myGarden.ripenPlant('olive', 30));