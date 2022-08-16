function solve() {
    const text = document.getElementById('text').value;
    const type = document.getElementById('naming-convention').value;
    let resultText = document.getElementById('result');
    let result = '';
    const lowerLatterText = text.toLowerCase();

    if (type === 'Camel Case') {
        result = camelize(lowerLatterText)
    } else if (type === 'Pascal Case') {
        result = pascalCase(lowerLatterText)
    } else {
        result = 'Error!'
    }

    resultText.textContent = result;

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    function pascalCase(str) {
        return `${str}`
            .toLowerCase()
            .replace(new RegExp(/[-_]+/, 'g'), ' ')
            .replace(new RegExp(/[^\w\s]/, 'g'), '')
            .replace(
                new RegExp(/\s+(.)(\w*)/, 'g'),
                ($1, $2, $3) => `${$2.toUpperCase() + $3}`
            )
            .replace(new RegExp(/\w/), s => s.toUpperCase());
    }
}