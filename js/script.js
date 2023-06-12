var choice = function(selector) {
    return document.querySelector(selector)
};

var title = choice('.title')
var start = choice('.nav__button-start');
var pause = choice('.nav__button-pause');
var interval = choice('.button-interval')
var continueTimer = choice('.nav__button-continue');
var clear = choice('.nav__button-clear');
var timer = choice('.clock__watch');
var timerMilli = choice('.millisec');
var hour = 0;
var min = 0;
var sec = 0;
var millisec = 0;
var areaInt = choice('.intervals__area');
var listIntervals = choice('.intervals__list');
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
    title.classList.add('neon');
    start.classList.add('hidden');
    pause.classList.remove('hidden');
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};
function forContinue() {
    title.classList.add('neon');
    continueTimer.classList.add('hidden');
    pause.classList.remove('hidden');
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};
function forPause() {
    title.classList.remove('neon');
    pause.classList.add('hidden');
    continueTimer.classList.remove('hidden');
    clearInterval(interval);
}
function forClear() {
    title.classList.remove('neon');
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
