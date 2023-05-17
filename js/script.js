var start = document.querySelector('.nav__button-start');
var pause = document.querySelector('.nav__button-pause');
var continueTimer = document.querySelector('.nav__button-continue');
var clear = document.querySelector('.nav__button-clear');
var timer = document.querySelector('.clock__watch');
var timerMilli = document.querySelector('.millisec');
var hour = 0;
var min = 0;
var sec = 0;
var millisec = 0;
var interval;

function startTimer () {
    millisec+=4;
    if (millisec > 999) {
        sec++;
        millisec = 0;
    }
    if (sec > 59) {
        min++;
        sec = 0;
    }
    if (min > 59) {
        hour++;
        min = 0;
    }
    timer.innerHTML = `${hour<10?"0"+hour:hour}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec}`;
    timerMilli.innerHTML = `${millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec}`;
};

function forStart() {
    start.classList.add('hidden');
    pause.classList.remove('hidden');
    clearInterval(interval);
    interval = setInterval(startTimer, 4);
};
function forContinue() {
    continueTimer.classList.add('hidden');
    pause.classList.remove('hidden');
    clearInterval(interval);
    interval = setInterval(startTimer, 4);
};
function forPause() {
    pause.classList.add('hidden');
    continueTimer.classList.remove('hidden');
    clearInterval(interval);
}
function forClear() {
    continueTimer.classList.add('hidden');
    pause.classList.add('hidden');
    start.classList.remove('hidden');
    clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    millisec = 0;
    timer.innerHTML = `${hour<10?"0"+hour:hour}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec}`;
    timerMilli.innerHTML = `${millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec}`;
};

start.addEventListener('click', forStart);
pause.addEventListener('click', forPause);
continueTimer.addEventListener('click', forContinue);
clear.addEventListener('click', forClear);
