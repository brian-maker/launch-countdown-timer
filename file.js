
const countDown = () =>{
    // set date we're counting down to
    let countDownDate = new Date("6 21 2024 00:00:00").getTime();
    let now = new Date().getTime();

    let difference = countDownDate - now ;

    // define days hours minutes and seconds
    let seconds = 1000;
    let minutes = seconds*60;
    let hours = minutes*60;
    let days = hours*24

    // time calculations for days hours minutes and seconds
    let remainingDays =Math.floor(difference/days)
    let remainingHours = Math.floor((difference % days)/hours);
    let remainingMinutes = Math.floor((difference % hours)/minutes)
    let remainingSeconds = Math.floor((difference % minutes)/seconds)

    if(remainingDays < 10){
        remainingDays = "0" + remainingDays
    }
    if(remainingHours < 10){
        remainingHours = "0" + remainingHours
    } 
    if(remainingMinutes < 10){
        remainingMinutes = "0" + remainingMinutes
    } if(remainingSeconds < 10){
        remainingSeconds = "0" + remainingSeconds
    }

    document.getElementById("days").innerText = remainingDays;
    document.getElementById("hours").innerText = remainingHours;
    document.getElementById("minutes").innerText = remainingMinutes;
    document.getElementById("seconds").innerText = remainingSeconds;
    


}
setInterval(countDown,1000)