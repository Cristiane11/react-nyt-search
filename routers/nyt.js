app.get("/scrape", function(req, res) {
    // First, we grab the body of the html with request
    axios.get("https://www.nytimes.com/").then(function(response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $("article.story").each(function(i, element) {
            var result = {};

            result.title = $(this).children('h2.story-heading').children('a').text()
            result.link = $(this).children('h2.story-heading').children('a').attr('href')
            result.author = $(this).children('p.byline').text().trim();
            result.summary = $(this).children('p.summary').text().trim();

            if (result.author === '') {
                result.author = 'No author provided for this article'
            }
            if (result.summary === '') {
                result.summary = 'No summary provided for this article'
            }
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
                .then(function(dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function(err) {
                    // If an error occurred, send it to the client
                    return res.json(err);
                });
        });

        // If we were able to successfully scrape and save an Article, send a message to the client
        res.send("Scrape Complete");
    });
});