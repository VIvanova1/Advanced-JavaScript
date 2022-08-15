function extract(content) {
    const text = document.getElementById('content').textContent;
    let result = '';

    const patter = /\(.+?\)/gm;
    let match = patter.exec(text);
    while (match !== null) {
        result += match + '; '
        match = patter.exec(text);
    }
    return result;

}