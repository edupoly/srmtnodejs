// from express import express//python
// import {express } from 'express'//reactjs
var express = require("express"); //nodejs importing library
var app = express();
var fs = require("fs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
  if (req.query.arth == "rem") {
    res.send(req.query.a % req.query.b);
  }
});

app.get("/myform", (req, res) => {
  res.sendFile(__dirname + "/arth.html");
});

app.post("/add", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);

  if (req.body.arth == "add") {
    res.send(+req.body.a + +req.body.b);
  }

  if (req.body.arth == "sub") {
    res.send(req.body.a - req.body.b);
  }
  if (req.body.arth == "mul") {
    res.send(req.body.a * req.body.b);
  }
  if (req.body.arth == "div") {
    res.send(req.body.a / req.body.b);
  }
  if (req.body.arth == "rem") {
    res.send(req.body.a % req.body.b);
  }
});

app.get("/addStudent", (req, res) => {
  res.sendFile(__dirname + "/studentform.html");
});

app.post("/savestudent", (req, res) => {
  console.log(req.body);
  fs.writeFileSync("addnewstudents.txt", JSON.stringify(req.body));
  res.send("please wait");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/aboutus", (req, res) => {
  res.sendFile(__dirname + "/aboutus.html");
});

app.get("/students", (req, res) => {
  var data = JSON.parse(fs.readFileSync("students.txt").toString());
  res.json(data);
});

app.get("/employees", (req, res) => {
  var data = JSON.parse(fs.readFileSync("employees.txt").toString());
  var str = "";
  str = "<table border='2'>";
  data.forEach((emp) => {
    str =
      str +
      `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.role}</td>
        <td>${emp.department}</td>
      </tr>
    `;
  });
  str = str + "</table>";
  res.send(str);
});

app.listen(4000, () => {
  console.log("something running on 4000");
});
