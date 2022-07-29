const mongoose = require("mongoose");
const config = reqire("./server/.env");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect(`mongodb://localhost/Product`)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));