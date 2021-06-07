const countdown = () => {
    const countDate = new Date('Mar 31 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const day = hours * 24;

    //  calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hours);
    const textMinute = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconds);

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.seconds').innerHTML = textSeconds;
}

countdown()
setInterval(countdown, 1000)