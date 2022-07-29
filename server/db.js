const mongoose = require("mongoose");
const config = reqire("./server/.env");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect(`mongodb://localhost/Product`)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

  const getItems = (callback) => {

    Product.products.find(/*????*/).sort({ term: 'asc' })
      .then(results => callback(null, results))
      .catch(err => callback(err));

  };

  const getItemByProductId = (callback) => {

    Product.products.find(/*????*/).sort({ term: 'asc' })
      .then(results => callback(null, results))
      .catch(err => callback(err));

  };

  const getStylesByProductId = (callback) => {

    Product.styles.find(/*????*/).sort({ term: 'asc' })
      .then(results => callback(null, results))
      .catch(err => callback(err));

  };

  const getRelatedItemsByProductId = (callback) => {

    Product.related_items.find(/*????*/).sort({ term: 'asc' })
      .then(results => callback(null, results))
      .catch(err => callback(err));

  };

  module.exports = {
    getItems,
    getItemByProductId,
    getStylesByProductId,
    getRelatedItemsByProductId
  }