function solve(area, vol, input) {
    const data = JSON.parse(input)

    function calc(data) {
        let areaCalc = area.call(data);
        let volumeCalc = vol.call(data);
        return {
            area: areaCalc,
            volume: volumeCalc
        }
    }
    return data.map(calc)
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

console.log(solve(areaF, volF, `[

    {"x":"1","y":"2","z":"10"},

    {"x":"7","y":"7","z":"10"},

    {"x":"5","y":"2","z":"10"}

    ]`))