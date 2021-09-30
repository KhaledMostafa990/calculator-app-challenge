'use strict'

// Gloabal varible

const calcOptions = document.querySelector('.calc-container')

const firstUserInput = document.getElementById('screen-input1')
const secontUserInput = document.getElementById('screen-input2')

const themesButtons = document.querySelectorAll('.th-btns');

let firstValuePlus;
let firstValueSubtract;
let firstValueMultiply;
let firstValueDevide;
let secondValue;




// helper funstion 

const addClass = (elm,className)=>{
  elm.classList.add(className);
}
const removeClass = (elm,className)=>{
  elm.classList.remove(className);
}
// listen for theme button

themesButtons.forEach((button,indx,array) => {
  
  button.addEventListener('click', (e) => {
    console.log(e.target);
    
    if (e.target.matches('.theme-btn-2')){
      console.log('theme 2');
      removeClass(array[0],('th-active'))
      removeClass(array[1],('th-active'))
      removeClass(array[2],('th-active'))

      addClass(button,('th-active'))


    } else if (e.target.matches('.theme-btn-3')){
      console.log('theme 3');
      removeClass(array[0],('th-active'))
      removeClass(array[1],('th-active'))
      removeClass(array[2],('th-active'))
      addClass(button,('th-active'))


    } else if (e.target.matches('.theme-btn-1')){
      console.log('theme 1');
      removeClass(array[0],('th-active'))
      removeClass(array[1],('th-active'))
      removeClass(array[2],('th-active'))
      addClass(button,('th-active'))

    }
  });
  // button.classList.remove('th-active')
});











    calcOptions.addEventListener('click', (e) => {
      if (e.target.matches('.btn-op')) { 
        let key = e.target;
        let action = key.matches('.btn-ac');
        let number = key.matches('.btn-num');
        let keyContent = key.textContent;
        let screenInputs = firstUserInput.textContent;
       
        switch (keyContent) {
          case '0': case '1': case '2': case '3': case '4': case '5':
          case '6': case '7': case '8': case '9': case '.':

            console.log(keyContent ,'number'); 
            if (firstUserInput.textContent === '0') { // If defult screen = 0;
              firstUserInput.textContent = keyContent;

            } else if (Number.isInteger(firstValuePlus)
              || Number.isInteger(firstValueSubtract) 
              || Number.isInteger(firstValueMultiply) 
              || Number.isInteger(firstValueDevide)
              ) 
              { // if the first value have assigned
              
                secontUserInput.textContent += keyContent; // add New value
                secondValue = eval(secontUserInput.textContent); // save new value
                console.log(secondValue, 'save seconde value');
              }

            else { // merge keys  
              firstUserInput.textContent += keyContent
            } 
            
            break;

          case '+': // If Plus action clicked
              console.log(keyContent ,'action'); 
              firstValuePlus = eval(screenInputs); // save first value
              console.log(firstValuePlus, 'save first value')
              firstUserInput.classList.add('calc-state'); // change value first place
    
            break;

          case '-': // If Substract action 
            console.log(keyContent ,'action'); 
            firstValueSubtract = eval(screenInputs);
            console.log(firstValueSubtract, 'save first value')
            firstUserInput.classList.add('calc-state');
          break;

            case 'x': // If Multiply action 
              console.log(keyContent ,'action'); 
              firstValueMultiply = eval(screenInputs);
              console.log(firstValueMultiply, 'save first value')
              firstUserInput.classList.add('calc-state');
            break;

            case '/': // If Devide action 
              console.log(keyContent ,'action');
              firstValueDevide = eval(screenInputs);
              console.log(firstValueDevide, 'save first value')
              firstUserInput.classList.add('calc-state');
            break;

            case 'DEL': // If Delete action 
              console.log(keyContent ,'action');
              if (secontUserInput.textContent === ''){ 
                // if second value empty Delete from the first value
                let str = firstUserInput.textContent;
                firstUserInput.textContent = str.substring(0, str.length - 1)
              } else { // else
                // remove from second value 
                secondValue = secondValue.toString();
                secondValue = secondValue.slice( 0 , -1) ;
                secondValue = parseInt(secondValue);
                console.log(secondValue);
  
                let str = secontUserInput.textContent;
                secontUserInput.textContent = str.substring(0, str.length - 1)
              }
              break;

          case '=': // // If Equale 
              if (firstValuePlus) { // For plus 
                firstUserInput.textContent = firstValuePlus + secondValue;
                firstUserInput.classList.remove('calc-state')
                secontUserInput.textContent = '';
                secondValue = undefined;
                firstValuePlus = undefined;
                console.log( firstUserInput.textContent, 'result')

              } else if (firstValueSubtract) { // For substract 
                firstUserInput.textContent = firstValueSubtract - secondValue;
                firstUserInput.classList.remove('calc-state')
                secontUserInput.textContent = '';
                secondValue = undefined;
                firstValueSubtract = undefined;
                console.log( firstUserInput.textContent, 'result')

              } else if ( firstValueMultiply) { // For multiply 
                firstUserInput.textContent = firstValueMultiply * secondValue;
                firstUserInput.classList.remove('calc-state')
                secontUserInput.textContent = '';
                secondValue = undefined;
                firstValueMultiply = undefined;
                console.log( firstUserInput.textContent, 'result')
              } else if (firstValueDevide) { // For devide
                firstUserInput.textContent = firstValueDevide / secondValue;
                firstUserInput.classList.remove('calc-state')
                secontUserInput.textContent = '';
                secondValue = undefined;
                firstValueDevide = undefined;
                console.log( firstUserInput.textContent, 'result')
              }

            break;
            
          case 'RESET': // If RESET
            firstUserInput.textContent = '0';
            secontUserInput.textContent = '';
            firstUserInput.classList.remove('calc-state')
            firstValuePlus = '';
            console.log('reset calculator');
            break;

          default:

            break;

        }
        
      } 
    });


// document.addEventListener('keypress', (e) => {
    
// });