//Creating a countdown clock
let interval;

//creating countdown on HTML
let dayField = document.getElementById("day");
let hourField = document.getElementById("hour");
let minuteField = document.getElementById("minute");
let secondField = document.getElementById("second");

//Creating the target date
const eventDay = new Date("04/15/2023");

//Creating the duration of second, minute, hour, and day
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDown = () => {
  everySecond = setInterval(countDown, second);
  everyMinute = setInterval(countDown, minute);
  everyHour = setInterval(countDown, hour);
};

//Creating the count down from the current time
let now = new Date();
let timeSpan = eventDay - now;

//if-elseif statement to check if the date has passed
if (timeSpan <= -today) {
  console.log("It must be Izzy's birthday");
  clearInterval(interval);
} else if (timeSpan <= 0) {
  console.log("Today is Izz's Birthday!");
  clearInterval(interval);
  return;
} else {
  const days = Math.floor(timeSpan / days);
  const hours = Math.floor((timeSpan % hours) / hour);
  const minutes = Math.floor((timeSpan % minutes) / minute);
  const seconds = Math.floor((timeSpan % seconds) / second);

  dayField.innerHTML = days;
  hourField.innerHTML = hours;
  minuteField.innerHTML = minutes;
  secondField.innerHTML = seconds;

  console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
}

//interval = setInterval(countDown, second);
