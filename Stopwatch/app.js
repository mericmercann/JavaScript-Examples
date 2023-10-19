const minute = document.getElementById("minute");
const second = document.getElementById("second");

//Boxes
const chosenmin = document.getElementById("chosen-min");
const chosensec = document.getElementById("chosen-sec");

//Buttons
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

let stop = false;

chosenmin.addEventListener("change",() =>{
    second.textContent = chosenmin.value;
});

chosensec.addEventListener("change",() =>{
    second.textContent = chosensec.value < 10 ? "0" + chosensec.value : chosensec ;
});

startButton.addEventListener("click",startTimer);

resetButton.addEventListener("click",()=>{
    stop = true;
    minute.textContent = "00";
    second.textContent = "00";
    chosenmin.value = "00";
    chosensec.value = "00";
});

function startTimer() {
    let min = minute.textContent;
    let sec = second.textContent;
  
    const interval = setInterval(() => {
      sec--;
      sec = sec < 10 ? "0" + sec : sec;
      if (sec == "0-1") {
        min--;
        sec = 59;
      }
      if ((min == 00 && sec == 00) || (min == 0 && sec == 0)) {
        clearInterval(interval);
        window.alert("Süre doldu");
        secilenmin.value = "00";
        secilenSn.value = "00";
      }
      if (dur) {
        clearInterval(interval);
        return;
      }
  
      minute.textContent = min;
      second.textContent = sec;
    }, 1000);
  }