//NWjm68ZFZlHI0ZW7
//ouioui

const {MongoClient} = require('mongodb');
const MONGODB_URI='mongodb+srv://GusIsc:p8ONjNKX7Oxi2LGL@webapparchcluster.refsn.mongodb.net/WebAppArchCluster?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';
let client = null;
var adresseP = require('E:/clear-fashion/server/sites/adresseParis.json');
var dedicated = require('E:/clear-fashion/server/sites/dedicated.json');
var montlimart = require('E:/clear-fashion/server/sites/montlimart.json');
var products = adresseP.concat(dedicated, montlimart);
let db;  

async function Connect(){
    client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
    console.log("Connection Successful");
    db =  await client.db(MONGODB_DB_NAME);
}

async function Close(){
    await client.close();
    console.log("Connection Closed");
}

async function InsertProduct(){ 
    await db.createCollection("products");
    const collection = await db.collection('products');
    //console.log(typeof(products));
    const result = await collection.insertMany(products);
    //console.log(result);
}

async function main(){
    await Connect();
    await InsertProduct();
    await Close();
}

