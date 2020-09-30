"use strict"

function secondsToMinutes(sec) {
    sec = sec / 60;
    return console.log(sec.toFixed(2) + " sec");
}

const minToSec = (min) => {
    min = min * 60;
    return console.log(min+ " min");
}

const daysToSec = (days) => {
    const daysInSec = days
        *24
        *60
        *60
    return console.log(days, "Tage sind", daysInSec.toString(10), "Sekunden.")
}

daysToSec(2)
minToSec(60)
secondsToMinutes(800)

