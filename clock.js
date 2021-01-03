// time events
let wakeUp = 6
let lunch = 12
let noon = 12
let nap = 14
let evening = 18

const showCurrentTime = () => {
    var clock = document.getElementById("time")
    var meridian = 'AM';

    var timeHolder = new Date();
    var hour = timeHolder.getHours();
    var minutes = timeHolder.getMinutes();
    var seconds = timeHolder.getSeconds();

    if (hour > noon)
        meridian = 'PM'

    if (minutes < 10)
        minutes = '0' + minutes

    if (seconds < 10)
        seconds = '0' + seconds

    var currentTime = `${hour} : ${minutes} : ${seconds} ${meridian}`
    clock.innerText = currentTime

}


var setActions = () => {
    var time = new Date().getHours()
    var correspondingMessage;
    var correspondingEvent = document.getElementById('currentEvent')

    if (time == wakeUp) {
        correspondingMessage = "It's time to wake up"
    } else if (time == lunch) {
        correspondingMessage = "Lunch time"
    } else if (time == nap) {
        correspondingMessage = "Nap time"
    } else if (time == evening) {
        correspondingMessage = "Evening time"
    } else if (time < noon) {
        correspondingMessage = "Good morning"
    } else if (time >= noon) {
        correspondingMessage = "Good afternoon"
    } else if (time >= evening) {
        correspondingMessage = "Good evening"
    } else {
        correspondingMessage = "No event"
    }

    currentEvent.innerText = correspondingMessage
    showCurrentTime();
}

setActions();
var oneSecond = 1000;
setInterval(setActions, oneSecond);

// implement the custom time selection

// for wake up
let wakeUpValue = document.getElementById('wakeUpTimeSelector')
const wakeUpSelector = () => {
    wakeUp = wakeUpValue.Value;
}
wakeUpValue.addEventListener("change", wakeUpSelector)


// for lunch
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function() {
    lunch = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);


// for nap
var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function() {
    nap = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);