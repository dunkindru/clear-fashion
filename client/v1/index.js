// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

const cheap_tee = [{ 
    'name' : 'Hoopal',
    'url' : 'https://hopaal.com/collections/t-shirts-homme/products/classique-forest-t-shirt-homme?variant=19733822111830'
}, {
    'name' : 'Loom',
    'url' : 'https://www.loom.fr/products/le-t-shirt'
}, { 
    'name' : 'ADRESSE',
    'url' : 'https://adresse.paris/t-shirts-et-polos/4238-t-shirt-ranelagh-1300000262026.html'        
}];

console.table(cheap_tee);

/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable
const number_product = marketplace.length
console.log(number_product);

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have
var list_brand = marketplace.map(a => a.brand); 
var number_brand = new Set(list_brand);
console.log(number_brand);
console.log(number_brand.size)    

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable
var sort_marketplace_price = marketplace.sort((a,b)=> a.price - b.price)
console.log(sort_marketplace_price)

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable
var sort_marketplace_date = marketplace.sort(function(a,b){
  if (a.date<b.date) {
    return -1;
  } else {
    return 1;
}});
console.log(sort_marketplace_date);

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list
var filter_marketplace_50100 = marketplace.filter(a => a.price>=50 && a.price<100);
console.log(filter_marketplace_50100);

// 🎯 TODO: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average
const average = marketplace.reduce((total, next) => total + next.price, 0)/ marketplace.length;
console.log(average);


/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brandsanipulate products by brand name
// The key is the brand name
// 1. Create an object called `brands` to m
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
var groupbyBrand = marketplace.reduce(function(groups, item) {
  const val = item["brand"]
  groups[val] = groups[val] || []
  groups[val].push(item)
  return groups
}, {});

// 2. Log the variable
console.log(groupbyBrand);
// 3. Log the number of products by brands
const val = Object.values(groupbyBrand);
var nb_per_brand = new Object();
val.forEach(a => nb_per_brand[a[0].brand] = a.length);
console.log(nb_per_brand);

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
var sortbrand = new Object(); 
val.forEach(a => sortbrand[a[0].brand] = (a.sort((b,c) => b.price - c.price)))
// 2. Log the sort
console.log(sortbrand);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
var sortbrand_date = new Object(); 
val.forEach(a => sortbrand_date[a[0].brand] = (a.sort(function(a,b){
  if (a.date<b.date) {
    return -1;
  } else {
    return 1;
}})));
// 2. Log the sort
console.log(sortbrand_date);





/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products
var p90 = new Object();

for (const [key, value] of Object.entries(sortbrand)){
  let pos = Math.round(value.length * 0.1);
  p90[key] = value[pos].price;
};
console.log(p90);




/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
const date = new Date('2021-01-16');
function isNew(product){
  const release = new Date(product.released);
  var diff = Math.abs((date - release)/(7*24*60*60*1000));
  //console.log(diff);
  if (diff < 2) {
    console.log("True");
  }
  else
  {
    console.log("False");
  };
}
isNew(COTELE_PARIS[0]);


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
var reasonable_price = "True";
COTELE_PARIS.forEach(function(a) { if (a.price>100) {reasonable_price = "False"; };})
console.log(reasonable_price);

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
var product = new Object();

COTELE_PARIS.forEach(function(a) { if (a.uuid == `b56c6d88-749a-5b4c-b571-e5b5c6483131`) {product = a;}});
console.log(product.name);

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
const COTELE_PARIS_V2 = COTELE_PARIS.filter(a => a.uuid != `b56c6d88-749a-5b4c-b571-e5b5c6483131`);
// 2. Log the new list of product
console.log(COTELE_PARIS_V2);


// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
console.log(blueJacket);
console.log(jacket);

// 2. What do you notice?

//Same thing

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

jacket = {...blueJacket};
jacket.favorite = true;

console.log(blueJacket);
console.log(jacket);



/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
localStorage.setItem('fav_brand', JSON.stringify(MY_FAVORITE_BRANDS));
// 2. log the localStorage
console.log(localStorage);