"use strict";

require("./other.js");

console.log(Math.pow(2, 10));
var students = ["Max", "Monika"];

var _loop = function _loop() {
  var student = _students[_i];
  setTimeout(function () {
    console.log(student);
  }, 1000);
};

for (var _i = 0, _students = students; _i < _students.length; _i++) {
  _loop();
}