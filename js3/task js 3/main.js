function clock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";

    if (hours > 12) {
        hours =hours - 12;
        period = "PM";
    } else if (hours >= 12) {
        period = "PM";
    } else if (hours == 0) {
        hours = 12; // منتصف الليل
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const time = `${hours}:${minutes}:${seconds} ${period}`;
    document.getElementById('clock').innerText = time;
}

// استدعاء الدالة كل ثانية
setInterval(clock, 1000);

// استدعاء أولي مباشر
clock();

