const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
// app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/products', function (req, res) {

  db.getItems((err, data) => {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.get(`/products/:product_id`, function (req, res) {
  console.log(req.params.product_id);

  db.getItemByProductId(req.params.product_id, (err, data) => {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.get(`/products/:product_id/styles`, function (req, res) {

  db.getStylesByProductId(req.params.product_id, (err, data) => {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.get(`/products/:product_id/related`, function (req, res) {

  db.getRelatedItemsByProductId(req.params.product_id, (err, data) => {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.listen(port);
console.log(`Listening at localhost:${port}`);