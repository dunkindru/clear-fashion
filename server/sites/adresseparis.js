const fetch = require('node-fetch');
const cheerio = require('cheerio');
const {'v5': uuidv5} = require('uuid');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data);
  return $('li[class^="ajax"] .product-container')
    .map((i, element) => {
        
        const link = $(element).find('.product-name-container.versionpc .product-name').attr('href');
        return {
            link,
            'brand': 'Adresse Paris',
            'price': parseInt(
                $(element)
                .find('.price.product-price')
                .text()
            ),
            'name': $(element)
                    .find('.product-name-container.versionpc>.product-name')
                    .text()
                    .trim()
                    .replace(/\s/g, ' '),
            'photo': $(element)
                    .find('img.replace-2x.img-responsive.lazy.img_0.img_1e')
                    .attr('data-original'),
            '_id': uuidv5(link, uuidv5.URL)
        };
        })
        .get();
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
module.exports.scrape = async url => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const body = await response.text();
      return parse(body);
    }

    console.error(response);

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};