require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db.js"); // import mongoose db

const app = express();

app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/products', function (req, res) {

  db.getItems(function (err, data) {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.get(`/products/${product_id}`, function (req, res) {

  db.getItemByProductId(function (err, data) {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.get(`/products/${product_id}/styles`, function (req, res) {

  db.getStylesByProductId(function (err, data) {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.get(`/products/${product_id}/related`, function (req, res) {

  db.getRelatedItemsByProductId(function (err, data) {

    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }

  });

});

app.listen(process.env.PORT);
console.log(`Listening at ${process.env.PORT}`);