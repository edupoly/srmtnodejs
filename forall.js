// from express import express//python
// import {express } from 'express'//reactjs
var express = require("express"); //nodejs importing library
var app = express();

app.get("/hi", (req, res) => {
  console.log("Hi called");
  res.send("Hello How are you");
});

app.get("/praveen", (req, res) => {
  console.log("im called");
  res.send("new Praveen called");
});

app.get("/add", (req, res) => {
  console.log(req.query);
  if (req.query.arth == "add") {
    res.send(+req.query.a + +req.query.b);
  }

  if (req.query.arth == "sub") {
    res.send(req.query.a - req.query.b);
  }
  if (req.query.arth == "mul") {
    res.send(req.query.a * req.query.b);
  }
  if (req.query.arth == "div") {
    res.send(req.query.a / req.query.b);
  }
});

app.get("/myform", (req, res) => {
  res.sendFile(__dirname + "/arth.html");
});

app.listen(4000, () => {
  console.log("something running on 4000");
});
