const d = document.querySelector("#days");
const h = document.querySelector("#hours");
const m = document.querySelector("#mins");
const s = document.querySelector("#secs");
const countdownContainer = document.querySelector(".countdown-container");
const title = document.querySelector(".title");


const newYears = new Date('Jan 1 2022 00:00:00').getTime(); 

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = newYears - now ;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    const seconds = Math.floor((distance % (1000 * 60 )) / 1000 );

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = mins;
    s.innerHTML = seconds;

    if(distance < 0) {
        clearInterval(interval);
        countdownContainer.style.display = "none";
        title.innerText = "Happy New Year!";
    }


}, 1000);

