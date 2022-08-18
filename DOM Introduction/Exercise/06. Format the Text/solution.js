function solve() {
    const text = document.querySelectorAll('textarea')[0]
        .value
        .split('.');


    let res = [];

    let counter = 0;
    let sentCount = text.length - 1;
    let isLastOne = false;

    for (let i = 0; i < sentCount; i++) {

        if (text[i].length <= 1) {
            continue;
        };

        counter++;
        res.push(text[i])

        if (i === sentCount - 1) {
            isLastOne = true;
        }

        if ((counter % 3 === 0) || (isLastOne)) {
            console.log(res);

            let p = document.createElement('p');
            p.textContent = `${res.join('. ')}.`
            document.getElementById('output').appendChild(p);
            res = [];
        };
    };

}