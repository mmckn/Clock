
const secondsHand = document.querySelector(".clock1");
const minutesHand = document.querySelector(".clock2");
const hoursHand = document.querySelector(".clock3");
console.log(secondsHand);


function setSeconds(){
const now = new Date();
const seconds = now.getSeconds();
const secondsDegrees= ((seconds/60) *360 + 90);
console.log(secondsDegrees);
secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
if (secondsDegrees < 96) {
	secondsHand.style.transition = "0.0s";}
	else {secondsHand.style.transition = "0.4s";}
}
setInterval(setSeconds, 1000)


function setMinutes(){
const now = new Date();
const minutes = now.getMinutes();
const minutesDegrees= ((minutes/60) *360 + 90);
minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
}
setInterval(setMinutes, 1000)


function setHours(){
const now = new Date();
const hours = now.getHours();
const hoursDegrees= ((hours/12) *360 + 90);
hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setHours, 1000)

