function carFactory(car) {
    const newCar = {};

    newCar.model = car.model;

    newCar.engine = {};
    let powerRequest = Number(car.power);

    if (powerRequest <= 90) {
        newCar.engine.power = 90;
        newCar.engine.volume = 1800;
    } else if (powerRequest <= 120) {
        newCar.engine.power = 120;
        newCar.engine.volume = 2400;
    } else if (powerRequest <= 200) {
        newCar.engine.power = 200;
        newCar.engine.volume = 3500;
    }
    newCar.carriage = {}
    newCar.carriage.type = car.carriage;
    newCar.carriage.color = car.color;

    newCar.wheels = [];
    for (let i = 0; i < 4; i++) {
        let oneWheel = 0
        if (car.wheelsize % 2 !== 0) {
            oneWheel = car.wheelsize
        } else {
            oneWheel = car.wheelsize - 1
        }
        newCar.wheels.push(oneWheel);
    }

    return newCar;


}
carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
});
//result { model: 'VW Golf II',   engine: { power: 90,  volume: 1800 }, carriage: { type: 'hatchback',  color: 'blue' }, wheels: [13, 13, 13, 13] }