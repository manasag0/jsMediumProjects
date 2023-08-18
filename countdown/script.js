const newYears = "1 Jan 2024";
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('minuts')
const secondsEl = document.getElementById('seconds')


function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totlaseconds = (newYearsDate-currentDate)/1000;
    const seconds = Math.floor(totlaseconds)%60;
    const minutes = Math.floor(totlaseconds/60)%60;
    const hours = Math.floor(totlaseconds/3600)%24;
    const days = Math.floor(totlaseconds/3600/24);
  

    // console.log(days,hours,minutes,seconds)
    secondsEl.innerHTML =formatTime(seconds);
    minsEl.innerHTML = formatTime(minutes);
    hoursEl.innerHTML =formatTime(hours);
    daysEl.innerHTML = days;
    
 
}

function formatTime(time){
    return time <10 ? `0${time}`:time;
}

//initial call


countDown()
setInterval(countDown,1000)