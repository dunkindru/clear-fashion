/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sites/dedicatedbrand');
const adresseParis = require('./sites/adresseparis');
const montlimart = require('./sites/montlimard');
const fetch = require("node-fetch");
const fs = require('fs');
const {'v5': uuidv5} = require('uuid');
const { json } = require('express');

//https://adresse.paris/630-toute-la-collection
//https://www.dedicatedbrand.com/en/loadfilter?category=men%2Fnews
//https://www.montlimart.com/toute-la-collection.html

async function sandbox (eshop) {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    var products = [];
    var ad = "";
    switch (eshop){
      case "montlimart":
        var i = 1;
        var varr= "";
        while(true){
          let prod = await montlimart.scrape('https://www.montlimart.com/toute-la-collection.html' + '?p=' + i);
          if (prod[0]["_id"]== varr){
            ad = JSON.stringify(products);
            fs.writeFile('sites/montlimart.json', ad, (err)=> {if(err){throw err;} console.log("JSON saved : Montlimart");})   
            break;
          } 
          Array.prototype.push.apply(products, prod);
          varr = prod[0]["_id"];
          i = i+1;
        }
        break;
      case 'dedicated':
        const result = await fetch('https://www.dedicatedbrand.com/en/loadfilter?category=men%2Fall-men');
        const x   = await result.json();
        prod = x.products; 
        products = [];
        prod.splice(0,3);
        prod.forEach(function(a){
          if (a.length == undefined){
            products.push({'link' : 'https://www.dedicatedbrand.com/en/' + a.canonicalUri, "brand" : "dedicated", 
            "price" : a.price.priceAsNumber, "name" : a.name, "photo" : a.image[0], '_id': uuidv5(a.canonicalUri, uuidv5.URL)});

          }
        });       
        ad = JSON.stringify(products);
        //console.log(products);
        fs.writeFile('sites/dedicated.json', ad, (err)=> {if(err){throw err;} console.log("JSON saved : dedicated");})     
        break;
      case 'adresse':
        const product1 = await adresseParis.scrape("https://adresse.paris/630-toute-la-collection");
        //console.log(product1);
        const product2 = await adresseParis.scrape("https://adresse.paris/630-toute-la-collection?p=2")
        products = product1.concat(product2);
        ad = JSON.stringify(products);
        fs.writeFile('sites/adresseParis.json', ad, (err)=> {if(err){throw err;} console.log("JSON saved : Adresse");})
        break;
    }

    //console.log(products);
    console.log('done');
    return products;
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;
const web = ["montlimart", "dedicated", "adresse"];
web.forEach(a => sandbox(a));


