// from express import express//python
// import {express } from 'express'//reactjs
var express = require("express"); //nodejs importing library
var app = express();

app.get("/hi", (req, res) => {
  console.log("Hi called");
  res.send("Hello How are you");
});

app.get("/suresh", (req, res) => {
  console.log("im called");
  res.send("suresh called");
});

app.listen(4000, () => {
  console.log("something running on 4000");
});
