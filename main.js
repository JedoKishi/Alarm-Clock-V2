// Clock
const getTimeString = ({ hours, minutes, zone }) => {
    if (minutes / 10 < 1) {
        minutes = "0" + minutes;
    }
    return `${hours}:${minutes} ${zone}`;
};

//Clock Display
const renderTime = () => {
    var currentTime = document.getElementById("current-time");
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours = hours % 12;
    }

    const timeString = getTimeString({ hours, minutes, zone });
    currentTime.innerHTML = timeString;
}

//Update time
setInterval(renderTime, 1000);


//Alarm
var alarmString = null;
const handleSubmit = (event) => {
    event.preventDefault();
    const { hour, min, zone } = document.forms[0];
    alarmString = getTimeString({
        hours: hour.value,
        minutes: min.value,
        zone: zone.value
    })
    document.forms[0].reset();
}

document.forms[0].addEventListener("submit", handleSubmit);

//Active alarm
const activeAlarm = document.getElementById("active-alarm");
const activeAlarm = document.getElementById("alarm-text");
//this is breaking my clock
const handleSubmit = (event) => {
    event.preventDefault();

    const { hour, min, zone } = document.forms[0];
    alarmString = getTimeString({
        hours: hour.value,
        minutes: min.value,
        zone: zone.value
    })

    document.forms[0].reset();
    setalarm.style.display = "none";

    acticeAlarm.style.display = "block";
    alarmTextContainer.innerHTML = alarmText(alarmString);
}

//Alarm trigger
const alarmTextContainer = document.getElementById("alarm-text");
const alarmText = (time) => `Alarm set at time ${time}`;

alarmAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3"
alarmAudio.load();

const checkAlarm = (timeString) => {
    if (alarmString === timeString) {
        alarmAudio.play();
    }
}

const renderTime = () => {
    var currentTime = document.getElementById("current-time");
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours = hours % 12;
    }
    const timeString = getTimeString({ hours, minutes, seconds, zone });
    checkAlarm(timeString);
    currentTime.innerHTML = timeString;
}

//Reset alarm
const handleClear = () => {
    alarmString = "";
    activeAlarm.style.display = "none";
    createAlarm.style.display = "block";
};

const clearAlarm = document.getElementById("clear-alarm");

// Trigger handleClear on button click
clearAlarm.addEventListener("click", handleClear);