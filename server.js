const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://Carlos:solraC@cluster0.ukckn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
client.connect();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.listen(5000);
