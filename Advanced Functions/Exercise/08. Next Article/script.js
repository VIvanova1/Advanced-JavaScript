function getArticleGenerator(articles) {
    const articleDivElement = document.getElementById('content');

    let index = 0;


    function articleAdd() {
        if (index < articles.length) {
            const articleElement = document.createElement('article')
            articleElement.textContent = articles[index];
            articleDivElement.appendChild(articleElement)
            index++;
        }
    }
    return articleAdd
}