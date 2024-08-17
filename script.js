function updateCountdown() {
    const newYearTime = new Date('January 1, 2025 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const difference = newYearTime - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (difference < 0) {
        document.querySelector('.countdown-container').innerHTML = '<h1>Happy New Year!</h1>';
    }
}

setInterval(updateCountdown, 1000);
