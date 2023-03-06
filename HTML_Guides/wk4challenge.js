function showSection(section) {
    Stopwatch.style.display = "none";
    Timer.style.display = "none";
    Alarm.style.display = "none";
    section.style.display = "block";
}

function SWstart() {
    SWstartTime = Date.now();
    SWinterval = setInterval(() => {
        let now = Date.now();
        SWelapsedTime = now - SWstartTime;
        let hours = Math.floor((SWelapsedTime % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60));
        let minutes = Math.floor((SWelapsedTime % (1000 * 60 * 60)) /
            (1000 * 60));
        let seconds = Math.floor((SWelapsedTime % (1000 * 60)) /
            1000);
        let milliseconds = SWelapsedTime % 1000;
        SWtimeDisplay.innerHTML =
            (hours < 10 ? "0" + hours : hours) +
            ":" +
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds) +
            "." +
            (milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" +
                milliseconds : milliseconds);
    }, 10);
    SWstartB.setAttribute("disabled", "disabled");
}

function SWstop() {
    clearInterval(SWinterval);
    SWstartB.removeAttribute("disabled");
}

function SWreset() {
    SWstop();
    SWelapsedTime = 0;
    SWtimeDisplay.innerHTML = "00:00:00.000";
}

function TMstart() {
    TMtime = parseInt(TMinputTime.value) * 1000;
    TMinterval = setInterval(() => {
        TMtime -= 1000;
        let minutes = Math.floor(TMtime / 60 / 1000);
        let seconds = Math.floor(TMtime / 1000) % 60;
        let hours = Math.floor(TMtime / 3600 / 1000);
        TMtimeDisplay.innerHTML =
            (hours < 10 ? "0" + hours : hours) +
            ":" +
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds);
        if (TMtime <= 0) {
            clearInterval(TMinterval);
            alert("Time's up!");
        }
    }, 1000);
    TMstartB.setAttribute("disabled", "disabled");
}

function TMstop() {
    clearInterval(TMinterval);
    TMstartB.removeAttribute("disabled");
}

function TMreset() {
    TMstop();
    TMtimeDisplay.innerHTML = "00:00:00";
    TMinputTime.value = "";
}

function ALstartClock() {
    ALinterval = setInterval(() => {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        ALtimeDisplay.innerHTML =
            (hours < 10 ? "0" + hours : hours) +
            ":" +
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds);
        if (ALtimeDisplay.innerHTML === ALalarmTime) {
            alert("Wake up! Alarm is ringing.");
        }
    }, 1000);
}

function ALsetAlarm() {
    ALalarmTime = ALinputTime.value;
    ALsetB.setAttribute("disabled", "disabled");
}

function ALclearAlarm() {
    clearInterval(ALinterval);
    ALsetB.removeAttribute("disabled");
    ALtimeDisplay.innerHTML = "00:00:00";
    ALinputTime.value = "";
}