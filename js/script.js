var start = document.querySelector('.nav__button-start');
var pause = document.querySelector('.nav__button-pause');
var interval = document.querySelector('.button-interval')
var continueTimer = document.querySelector('.nav__button-continue');
var clear = document.querySelector('.nav__button-clear');
var timer = document.querySelector('.clock__watch');
var timerMilli = document.querySelector('.millisec');
var hour = 0;
var min = 0;
var sec = 0;
var millisec = 0;
var areaInt = document.querySelector('.intervals__area');
var listIntervals = document.querySelector('.intervals__list');
var li;

function startTimer () {
    millisec = millisec + 1;
    if (millisec > 99) {
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
    timerMilli.innerHTML = `${millisec < 10 ? "0" + millisec : millisec}`;
};

function writeInterval () {
    li = document.createElement('li');
    li.className = 'list-item';
    li.textContent = timer.innerHTML + '   :' + timerMilli.innerHTML + ' ms';
    listIntervals.appendChild(li)
    return;
};

function forStart() {
    start.classList.add('hidden');
    pause.classList.remove('hidden');
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};
function forContinue() {
    continueTimer.classList.add('hidden');
    pause.classList.remove('hidden');
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
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
    timerMilli.innerHTML = `${millisec < 10 ? "0" + millisec : millisec}`;
    listIntervals.remove();
    listIntervals = document.createElement('ul');
    listIntervals.className = 'intervals__list';
    areaInt.appendChild(listIntervals);
};

start.addEventListener('click', forStart);
pause.addEventListener('click', forPause);
interval.addEventListener('click', writeInterval);
continueTimer.addEventListener('click', forContinue);
clear.addEventListener('click', forClear);
