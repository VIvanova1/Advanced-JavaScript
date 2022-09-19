function calorieObject(input) {
    const food = {};

    for (let i = 0; i < input.length; i += 2) {

        food[input[i]] = Number(input[i + 1]);
    }
    console.log(food);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])