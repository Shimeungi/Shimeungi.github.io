
// 현재시간, 날짜 공간, 시간공간
const currentTime = document.querySelector(".currentTime");
const datePlace = currentTime.querySelector("h1:first-child");
const timePlace = currentTime.querySelector("h1:last-child");

function nowTime(){
  
 
  const date = new Date();
  const years = date.getFullYear();
  const month = convertToString(date.getMonth() + 1);
  const day = convertToString(date.getDate());

  const hours = convertToString(date.getHours());
  const minutes = convertToString(date.getMinutes());
  const seconds = convertToString(date.getSeconds());

  printDate(years, month, day);
  printTime(hours, minutes, seconds);
 
 
}

function convertToString(date){
  return String(date).padStart(2, "0");
}

function printDate(years, month, day){
  datePlace.innerText = `${years}년 ${month}월 ${day}일`;
}

function printTime(hours, minutes, seconds){
  timePlace.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function init(){
  nowTime();
  setInterval(nowTime, 1000);
}

init();