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
      
    }

  
/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                            MAIN
╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
/* --------------------------------------------------------------------------------------------
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
---------------------------------------------------------------------------------------------*/


const btnStart = document.querySelector(".btn-start")

const listNumbers = rndListUnequalNumber(5,1,100)




setInterval(timer, 1000);

