function info(...input) {
    const resultType = {};

    for (const line of input) {
        let typeArg = typeof line;
        console.log(`${typeArg}: ${line}`);

        if (!resultType.hasOwnProperty(typeArg)) {
            resultType[typeArg] = 1;
        } else {
            resultType[typeArg]++;
        }
    }
    let result = Object.entries(resultType);
    let sortResult = result.sort(([kA, vA], [kB, vB]) => {
        return vB - vA;
    })
    for (const [key, value] of sortResult) {
        console.log(`${key} = ${value}`);
    }

}
info({ name: 'bob' }, 3.333, 9.999);