"use strict"

const moment = require("moment")

const now = moment()

now.add(1, "year").add(1, "month")

console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"))