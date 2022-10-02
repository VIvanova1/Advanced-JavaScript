function processor(input) {
    let result = [];

    function command() {
        function add(str) {
            result.push(str);
        }

        function remove(str) {
            while (result.includes(str)) {
                const index = result.indexOf(str);
                if (index >= 0) {}
                result.splice(index, 1);
            }


        }

        function print() {
            console.log(result.join(','));
        }

        return {
            add,
            remove,
            print,
        }
    }

    const resfunc = command();
    for (const line of input) {
        const [typeFunc, str] = line.split(' ');

        resfunc[typeFunc](str)

    }

}
processor(['add again', 'add hii', 'add again', 'add again', 'remove again', 'print'])