const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const query = require("./db/query")
const PORT = 8092;
const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);

app.get('/products/search', async (req, response) => {
  var brand = req.query.brand;
  var limit = parseInt(req.query.limit);
  var price = parseInt(req.query.price);
  var result = await query.Search(brand, price, limit);
  response.send(result);
});

app.get('/products', async (req, response) => {
  await query.Connect();
  var result = await query.FindProducts();
  //await query.Close();
  response.send(result);
});

app.get('/', (request, response) => {
  response.send({'ack': true, 'test' : true});
});


app.get('/products/:_id', async (req, response) => {
  var result = await query.FindProducts_byID(req.params._id);
  //await query.Close();
  response.send(result);
});

