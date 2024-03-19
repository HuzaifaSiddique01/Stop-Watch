var time = 0;
var interval;
var display = document.getElementById("display");
var altBtns = document.getElementById("alt-btns");
var resetBtn = document.getElementById("reset");

function startTimer() {
    altBtns.innerHTML = "Stop"
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        time += 1
        display.innerHTML =
            Math.floor(time / 3600).toString().padStart(2, "0") + ":" + Math.floor((time % 3600) / 60).toString().padStart(2, "0") + ":" + Math.floor((time % 60)).toString().padStart(2, "0")
    }, 1000);
}

function stopTimer() {
    altBtns.innerHTML = "Start"
    clearInterval(interval);
    interval = null;
}

altBtns.onclick = function () {
    if (interval) {
        stopTimer();
    } else {
        startTimer();
    }
}

resetBtn.onclick = function () {
    altBtns.innerHTML = "Start"
    if (interval) {
        clearInterval(interval);
    }
    interval = null;
    time = 0;
    display.innerHTML = "00:00:00";
}