var fs = require("fs");
var data = fs.readFileSync("students.txt");
var students = JSON.parse(data.toString());
students.forEach((stu) => {
  if (stu.company == process.argv[2]) {
    console.log(stu);
  }
});
