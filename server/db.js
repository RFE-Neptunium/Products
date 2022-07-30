const mongoose = require("mongoose");
const config = reqire("./server/.env");

mongoose.connect(`mongodb://localhost/Product`)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

const getItems = (query, callback) => {

  db.product.find().limit(10)
    .then(results => callback(null, results))
    .catch(err => callback(err));

};

const getItemByProductId = (product_id, callback) => {

  db.product.aggregate([
    { $match: { "id": { product_id } } },
    { $lookup: { from: "features", localField: "id", foreignField: "product_id", as: "features" } }
  ])
    .then(results => callback(null, results))
    .catch(err => callback(err));

};

const getStylesByProductId = (product_id, callback) => {

  db.styles.find({ "productId": 1 })
    .then((res) => {
      const styles = res;
      const photos = [];
      const skus = [];
      styles.forEach(style => {
        photos.push(db.photos.find({ "styleId": { style.id } }));
        skus.push(db.skus.find({ "styleId": { style.id } }));
      });
    })
    .then((styles, photos, skus) => {
      for (let i = 0; i <= styles.length; i++) {
        styles[i].photos = photos[i];
        styles[i].skus = skus[i];
      }
      callback(null, styles);
    })
    .catch(err => callback(err));

};

const getRelatedItemsByProductId = (product_id, callback) => {

  db.related.find({ current_product_id: { product_id } })
    .then(results => callback(null, results))
    .catch(err => callback(err));

};

module.exports = {
  getItems,
  getItemByProductId,
  getStylesByProductId,
  getRelatedItemsByProductId
}