const display = document.querySelector(".display");


showTime = () => {
    let date = new Date();  
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    h = (hour > 12) ? hour = (hour - 12) : hour;
    h = (hour < 10) ? `0${hour}` : hour;
    m = (minute < 10) ? `0${minute}` : minute;
    s = (second < 10) ? `0${second}` : second;

    display.innerHTML = `${h}:${m}:${s}`;

}

setInterval(showTime, 1000);

