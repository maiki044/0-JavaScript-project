const hours = document.getElementById('hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
})
