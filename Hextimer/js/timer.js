"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const clock = document.getElementById('clock');
    const color = document.getElementById('hex-color');

    function hexClock() {

        let time = new Date();
        let hours = time.getHours().toString();
        let minutes = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();

        if (hours.length < 2) {
            hours = '0' + hours;
        }

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        const clockString = hours + ' : ' + minutes + ' : ' + seconds;
        const hexColorString = "#" + hours + minutes + seconds;

        clock.innerText = clockString;
        color.innerText = hexColorString;

        document.body.style.backgroundColor = hexColorString;
    }

    setInterval(hexClock, 1000);
})