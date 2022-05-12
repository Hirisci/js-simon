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
          number.innerHTML="";
          btn.innerHTML = "Finito"
          btn.classList.add("btn-end")
          btn.classList.remove("btn-skip")
          
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

const clock = document.querySelector(".text-box__timer")
let gameTime;
let coutTime= 5;
let listNumbers= [];

btn.addEventListener("click",function(){
    if(btn.classList.contains("btn-start")){
        number.innerHTML=""
        listNumbers = rndListUnequalNumber(5,1,99)
        info.classList.add("hide")
        number.classList.remove("hide")
        for (let i = 0; i < listNumbers.length; i++) {
            let div = document.createElement("div")
            div.classList.add("circle")
            div.classList.add(`element`)
            div.innerHTML = listNumbers[i]
            number.append(div)
            clock.classList.remove("hide")
        }
        btn.innerHTML = "Skip Time"
        btn.classList.add("btn-skip")
        btn.classList.remove("btn-start")
        gameTime = setInterval(timer,1000)
        coutTime = 5;  

    }else if(btn.classList.contains("btn-skip")){
        clearInterval(gameTime)
        number.classList.add("hide")
        numberInput.classList.remove("hide")
        clock.classList.add("hide")
        btn.innerHTML = "Finito"
        btn.classList.add("btn-end")
        btn.classList.remove("btn-skip")

    } else if(btn.classList.contains("btn-end")){
        numberInput.classList.add("hide")
        number.classList.remove("hide")
        const input = document.querySelectorAll(".test")
        console.log("===================================================")
        
        number.innerHTML = "";
        for (let i = 0; i < input.length; i++) {  
            let div = document.createElement("div")
            div.classList.add("circle")
            div.innerHTML = listNumbers[i]
            let k = 0
            console.log(k, listNumbers,input[k].value)
            sum = Number(input[k].value)
            while(listNumbers[i]!==sum && k < listNumbers.length ){
                sum = Number(input[k].value)
                if(listNumbers[i]===sum){
                    div.classList.add("circle--green")
                }
                console.log(listNumbers[i]===sum, listNumbers[i] ,sum)
                k += 1            
            }

            if(!div.classList.contains("circle--green")){
                div.classList.add("circle--red")
            }
               
            
            
            number.append(div)
        }
        btn.classList.remove('btn-end')
        btn.classList.add("btn-start")   
        btn.innerHTML = "Rigioca"
    }
   
})     






