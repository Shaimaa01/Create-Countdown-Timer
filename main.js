// The End Of The Year Data To Countdown To
// 1000 milliseocnds = 1 Second

let countDownDate = new Date("Dec 31,2024 23:59:59").getTime();

let counter = setInterval(() => {
  //Get Data Now
  let dateNow = new Date().getTime();
  // Find The Data Difference Between Now And ContDown Data
  let dateDiff = countDownDate - dateNow;
  // Get Time Unites
  //   let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
