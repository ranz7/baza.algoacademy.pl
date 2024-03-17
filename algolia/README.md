# How it works?

Rozwiązanie zawiera 2 czesci, algolia i crawler. Crawler parsuje zawartość strony i zapisuje do algolii.

Zanim crawler zostanie zaktualizowany, należy sprawdzić czy wszystkie przedmiiooty zostaly dodane na liste
algolia.crawler.json.

Żeby uruchomić crawlera strony należy w tym folderze odpalić:

```
docker run -it --env-file=.env.algolia.production -e "CONFIG=$(cat ./crawler.config.json | jq -r tostring)" algolia/docsearch-scraper

```

## Docs

https://www.howtocode.io/posts/algolia/how-to-setup-algolia-doc-search#running-the-crawler

https://docsearch.algolia.com/docs/

# TODO

"sitemap_urls": [
"https://www.howtocode.io/sitemap-0.xml"
],
