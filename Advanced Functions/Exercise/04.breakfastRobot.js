function solution() {

    const fridge = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipe = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };


    return function inputHandler(input) {
        let commandHandler = roboCommand()
        const [command, val1, val2] = input.split(' ');

        return commandHandler[command](val1, val2);
    }

    function roboCommand() {

        function restock(el, q) {
            fridge[el] += Number(q);
            return "Success";
        }

        function report() {
            let resultStore = []
            Object.entries(fridge).forEach(([key, value]) => {
                resultStore.push(`${key}=${value}`);
            });
            return resultStore.join(' ');
        }

        function prepare(recipeType, q) {
            let currentRecipe = recipe[recipeType];

            for (const [product, quantity] of Object.entries(currentRecipe)) {
                let currentQuantity = Number(fridge[product]);
                let needQuantity = Number(quantity) * q;
                if (currentQuantity < needQuantity) {
                    return `Error: not enough ${product} in stock`;
                } else {
                    fridge[product] = Number(fridge[product]) - needQuantity;

                }
            }
            return "Success";

        }

        return {
            restock,
            report,
            prepare,
        }
    }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock