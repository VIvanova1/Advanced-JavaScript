function timeToWalk(steps, footprintLength, speed) {
    let metersToUniversity = steps * footprintLength;
    let breaks = Math.floor(metersToUniversity / 500);
    let T = metersToUniversity / 1000 / speed;

    let totalTime = 60 * T + breaks;

    let hh = 0;
    let mm = 0;
    let ss = 00

    if (totalTime >= 60) {
        hh = Math.floor(totalTime / 60);
        totalTime -= hh * 60;
    }
    mm = Math.floor(totalTime);
    totalTime -= mm;
    ss = Math.ceil(totalTime * 60)

    if (hh < 10) {
        hh = `0${hh}`
    }
    if (mm < 10) {
        mm = `0${mm}`
    }
    if (ss < 10) {
        ss = `0${ss}`
    }
    console.log(`${hh}:${mm}:${ss}`);
}
//---Test---
timeToWalk(4000, 0.60, 5)

/* Result
00:32:48
*/
//---Test---
timeToWalk(2564, 0.70, 5.5)

/* Result
00:22:35
*/