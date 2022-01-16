import React from "react";

function calculateEventHandle(inputNumber) {
  var operators = ["+", "-", "*", "/"];

  var list = inputNumber.split("").map((item) => {
    if (operators.includes(item)) {
      return "-";
    } else {
      return item;
    }
  });

  var operatorList = inputNumber.split("").filter((item) => {
    if (operators.includes(item)) {
      return item;
    }
  });

  var lst = list
    .join("")
    .split("-")
    .map((item, index) => {
      return parseInt(item);
    });

  var mapp = lst.map((item) => (item ? item.toString() : ""));
  var filterMap = mapp.filter((item) => item != "");

  var abclist = filterMap.map((item, index) => {
    var op = operatorList[index] ? operatorList[index] : "";
    var t = item + "" + op;
    return t;
  });

  var output = abclist.join("");
  return output;
}


export default calculateEventHandle