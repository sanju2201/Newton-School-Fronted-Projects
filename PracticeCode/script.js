// console.log("Check Print")

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const start = document.getElementById("start");
start.disabled = false;
const pause = document.getElementById("pause");
pause.disabled = true;
const stopBtn = document.getElementById("stop");
stopBtn.disabled = true;
let hh = 00,
  mm = 00,
  ss = 00;
let interval = null;

start.addEventListener("click", () => {
  interval = setInterval(() => {
    ss++;

    if (ss < 10) {
      second.textContent = `0${ss}`;
    } else {
      second.textContent = `${ss}`;
    }

    if (ss > 59) {
      mm++;
      if (mm < 10) {
        minute.textContent = `0${mm}`;
      } else {
        minute.textContent = `${mm}`;
      }
      ss = 0;
      second.textContent = `0${ss}`;
    }

    if (mm > 59) {
      hh++;
      if (hh < 10) {
        hour.textContent = `0${hh}`;
      } else {
        hour.textContent = `${hh}`;
      }
      mm = 0;
      minute.textContent = `0${mm}`;
    }
  }, 1000);

  start.disabled = true;
  pause.disabled = false;
  stopBtn.disabled = false;
});

pause.addEventListener("click", () => {
  if (pause.textContent === "pause") {
    clearInterval(interval);
    pause.textContent = "continue";
  } else {
    pause.textContent = "pause";
    interval = setInterval(() => {
      ss++;

      if (ss < 10) {
        second.textContent = `0${ss}`;
      } else {
        second.textContent = `${ss}`;
      }

      if (ss > 59) {
        mm++;
        if (mm < 10) {
          minute.textContent = `0${mm}`;
        } else {
          minute.textContent = `${mm}`;
        }
        ss = 0;
        second.textContent = `0${ss}`;
      }

      if (mm > 59) {
        hh++;
        if (hh < 10) {
          hour.textContent = `0${hh}`;
        } else {
          hour.textContent = `${hh}`;
        }
        mm = 0;
        minute.textContent = `0${mm}`;
      }
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  (hh = 0), (mm = 0), (ss = 0);
  hour.textContent = `0${hh}`;
  minute.textContent = `0${mm}`;
  second.textContent = `0${ss}`;

  stopBtn.disabled = true;
  pause.disabled = true;
  start.disabled = false;
  pause.textContent = "pause";
});
