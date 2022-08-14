function roadRadar(speed, area) {
    const motorwaySpeed = 130;
    const interstateSpeed = 90;
    const citySpeed = 50;
    const residentialAreaSpeed = 20;

    const speeding = 20;
    const excessiveSpeeding = 40;

    let msg;
    let maxSpeed = 0;
    let diff = 0;
    let status;

    switch (area) {
        case 'motorway':
            maxSpeed = motorwaySpeed;
            diff = speed - maxSpeed;
            break;
        case 'interstate':
            maxSpeed = interstateSpeed;
            diff = speed - maxSpeed;
            break;
        case 'city':
            maxSpeed = citySpeed;
            diff = speed - maxSpeed;
            break;
        case 'residential':
            maxSpeed = residentialAreaSpeed;
            diff = speed - maxSpeed;
            break;
    }

    if (diff <= speeding) {
        status = 'speeding';
    } else if (diff <= excessiveSpeeding) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    if (diff <= 0) {
        msg = `Driving ${speed} km/h in a ${maxSpeed} zone`
    } else {
        msg = `The speed is ${diff} km/h faster than the allowed speed of ${maxSpeed} - ${status}`
    }
    console.log(msg);
}
//---Test---
roadRadar(40, 'city');
// Result - Driving 40 km/h in a 50 zone

//---Test---
roadRadar(21, 'residential')
    // Result - The speed is 1 km/h faster than the allowed speed of 20 - speeding

//---Test---
roadRadar(120, 'interstate')
    // Result - The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

//---Test---
roadRadar(200, 'motorway')
    // Result - The speed is 70 km/h faster than the allowed speed of 130 - reckless driving