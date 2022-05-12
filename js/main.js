/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                        FUNZIONI
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
// ritorna un numero Random che parte da MIN e arriva sino a MAX
function rndRangeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  //ritorna un Lista di numeri random compsta da n elementi conmpresi in min - max
  function rndListNumber(num, min, max) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(rndRangeNumber(min, max));
    }
    return arr;
  }
  
  //ritorna un Lista di numeri random CHE NON SI RIPETONO compsta da n elementi conmpresi in min - max
  function rndListUnequalNumber(num, min, max) {
    let arr = [];
    while (arr.length < num) {
      let number = rndRangeNumber(min, max);
      if (!arr.includes(number)) {
        arr.push(number);
      }
    }
    return arr;
  }
  
  // ritorna true se il numero é pari
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // convalida di un promt RETURN numero compreso tra min e max
  function numberValidateInRange(msg, min, max) {
    let input;
    do {
      input = Number(prompt(msg));
    } while (isNaN(input) || input < min || input > max);
    return input;
  }
  
  function timer(){
      clock.innerHTML = coutTime;
      if(coutTime===-1){
          clearInterval(gameTime)
          number.classList.add("hide")
          numberInput.classList.remove("hide")
          clock.classList.add("hide")
      }
      coutTime--
    }

  
/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                            MAIN
╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
/* --------------------------------------------------------------------------------------------
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
---------------------------------------------------------------------------------------------*/


const btn = document.querySelector(".btn")
const info = document.querySelector(".text-box__info")
const number= document.querySelector(".text-box__number")
const numberInput= document.querySelector(".text-box__number-input")
const listNumbers = rndListUnequalNumber(5,1,100)
const clock = document.querySelector(".text-box__timer")
let gameTime;
let coutTime= 5;

btn.addEventListener("click",function(){
    if(btn.classList.contains("btn-start")){

        info.classList.add("hide")
        number.classList.remove("hide")
        for (let i = 0; i < listNumbers.length; i++) {
            let div = document.createElement("div")
            div.innerHTML = listNumbers[i]
            number.append(div)
            clock.classList.remove("hide")
        }
        
        btnStart.innerHTML = "Skip Time"
        btnStart.classList.add("btn-skip")
        btnStart.classList.remove("btn-start")
        gameTime = setInterval(timer,1000)  

    }else if(btn.classList.contains("btn-skip")){
        clearInterval(gameTime)
          number.classList.add("hide")
          numberInput.classList.remove("hide")
          clock.classList.add("hide")
    } 
   
})     






