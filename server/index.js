require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db.js"); // import mongoose db

const app = express();

app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));




app.listen(process.env.PORT);
console.log(`Listening at ${process.env.PORT}`);