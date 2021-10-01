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

let bodyBg = document.querySelector('body');
let calcName = document.querySelector('.logo h1');
let themeWord = document.querySelector('.themes h5');
let themeNum = document.querySelectorAll('h6');
let themeToggleBg = document.querySelector('.theme-button');
let screenBg = document.querySelector('.screen-app');
let screeninputs = document.querySelectorAll('.screen-input1')

let keypadBg = document.querySelector('.options-app');
let keyBtns = document.querySelectorAll('.btn')

themesButtons[0].style.cssText = 'background-color: hsl(6, 63%, 50%);'
themesButtons.forEach((button,indx,array) => {
  
  button.addEventListener('click', (e) => {
    if (e.target.matches('.theme-btn-1')){
      console.log('theme 1');
      removeClass(array[0],('th-active'));
      removeClass(array[1],('th-active'));
      removeClass(array[2],('th-active'));
      addClass(button,('th-active'));
      bodyBg.style.cssText = 'background-color: hsl(222, 26%, 31%);'
      calcName.style.cssText = 'color: white;'
      themeWord.style.cssText = 'color: white;'
      themeNum.forEach((element) => {
        element.style.cssText = 'color: white;'
      });
      themeToggleBg.style.cssText = 'background-color: hsl(223, 31%, 20%);'
      array[1].style.cssText = 'background-color: none;';
      array[2].style.cssText = 'background-color: none;';
      button.style.cssText = 'background-color: hsl(6, 63%, 50%);'
      screenBg.style.cssText = 'background-color: hsl(224, 36%, 15%);'      
      firstUserInput.style.cssText = 'color: white;'
      secontUserInput.style.cssText = 'color: white;'            
      keypadBg.style.cssText = 'background-color: hsl(223, 31%, 20%);'            
      keyBtns.forEach((btn,indx,array)=>{
        array[3].style.cssText = 'background-color: hsl(225, 21%, 49%); box-shadow: 0px -3.5px 0 inset hsl(224, 28%, 35%);'
         btn.style.cssText = 'background-color:  hsl(30, 25%, 89%); box-shadow: 0px -3.5px 0 inset hsl(28, 16%, 65%);'
         btn.firstElementChild.style.cssText = 'color: hsl(221, 14%, 31%)'         
         array[3].firstElementChild.style.cssText = 'color: white'                  
        array[16].style.cssText = 'background-color: hsl(225, 21%, 49%); box-shadow: 0px -3.5px 0 inset hsl(224, 28%, 35%);'                           
        array[16].firstElementChild.style.cssText = 'color: white'                                   
        array[17].style.cssText = 'background-color: hsl(6, 63%, 50%); box-shadow: 0px -3.5px 0 inset hsl(6, 70%, 34%);'                                           
        array[17].firstElementChild.style.cssText = 'color: white'                                                   
      })            
    } else if (e.target.matches('.theme-btn-2')){
      console.log('theme 2');
      removeClass(array[0],('th-active'));
      removeClass(array[1],('th-active'));
      removeClass(array[2],('th-active'));
      addClass(button,('th-active'));
      bodyBg.style.cssText = 'background-color: hsl(0, 0%, 90%);'
      calcName.style.cssText = 'color: hsl(60, 10%, 19%);'
      themeWord.style.cssText = 'color: hsl(60, 10%, 19%);'
      themeNum.forEach((element) => {
        element.style.cssText = 'color: hsl(60, 10%, 19%);'
      });
      themeToggleBg.style.cssText = 'background-color: hsl(0, 5%, 81%);'
      array[0].style.cssText = 'background-color: none;';
      array[2].style.cssText = 'background-color: none;';
      button.style.cssText = 'background-color: hsl(25, 98%, 40%);'
      screenBg.style.cssText = 'background-color: hsl(0, 0%, 93%);'      
      firstUserInput.style.cssText = 'color: hsl(60, 10%, 19%);'
      secontUserInput.style.cssText = 'color: hsl(60, 10%, 19%);'           
      keypadBg.style.cssText = 'background-color: hsl(0, 5%, 81%);'           
      keyBtns.forEach((btn,indx,array)=>{
        array[3].style.cssText = 'background-color: hsl(185, 42%, 37%); box-shadow: 0px -3.5px 0 inset hsl(185, 58%, 25%);'
         btn.style.cssText = 'background-color: hsl(45, 7%, 89%); box-shadow: 0px -3.5px 0 inset hsl(35, 11%, 61%);'
         btn.firstElementChild.style.cssText = 'color: hsl(60, 10%, 19%)'         
         array[3].firstElementChild.style.cssText = 'color: white'                  
        array[16].style.cssText = 'background-color: hsl(185, 42%, 37%); box-shadow: 0px -3.5px 0 inset hsl(185, 58%, 25%);'                          
        array[16].firstElementChild.style.cssText = 'color: white'                                   
        array[17].style.cssText = 'background-color: hsl(25, 98%, 40%); box-shadow: 0px -3.5px 0 inset hsl(25, 99%, 27%);'                                           
        array[17].firstElementChild.style.cssText = 'color: white'                                                   
      })           

    } else if (e.target.matches('.theme-btn-3')){
      console.log('theme 3');
      removeClass(array[0],('th-active'));
      removeClass(array[1],('th-active'));
      removeClass(array[2],('th-active'));
      addClass(button,('th-active'));
      bodyBg.style.cssText = 'background-color: hsl(268, 75%, 9%);'
      calcName.style.cssText = 'color: hsl(52, 100%, 62%);'
      themeWord.style.cssText = 'color: hsl(52, 100%, 62%);'
      themeNum.forEach( (element) => {
        element.style.cssText = 'color: hsl(52, 100%, 62%);'
      });
      themeToggleBg.style.cssText = 'background-color: hsl(268, 71%, 12%);'
      array[0].style.cssText = 'background-color: none;';
      array[1].style.cssText = 'background-color: none;';
      button.style.cssText = 'background-color: hsl(176, 100%, 44%);'
      screenBg.style.cssText = 'background-color: hsl(268, 71%, 12%)'      
      firstUserInput.style.cssText = 'color: hsl(52, 100%, 62%);'
      secontUserInput.style.cssText = 'color: hsl(52, 100%, 62%);'           
      keypadBg.style.cssText = 'background-color: hsl(268, 71%, 12%);'           
      keyBtns.forEach((btn,indx,array)=>{
        array[3].style.cssText = 'background-color: hsl(281, 89%, 26%); box-shadow: 0px -3.5px 0 inset hsl(285, 91%, 52%);'
         btn.style.cssText = 'background-color: hsl(268, 47%, 21%); box-shadow: 0px -3.5px 0 inset hsl(290, 70%, 36%);'
         btn.firstElementChild.style.cssText = 'color:  hsl(52, 100%, 62%)'         
         array[3].firstElementChild.style.cssText = 'color: white'                  
        array[16].style.cssText = 'background-color: hsl(281, 89%, 26%); box-shadow: 0px -3.5px 0 inset hsl(285, 91%, 52%);'                           
        array[16].firstElementChild.style.cssText = 'color: white'                                   
        array[17].style.cssText = 'background-color: hsl(176, 100%, 44%); box-shadow: 0px -3.5px 0 inset hsl(177, 92%, 70%);'                                           
        array[17].firstElementChild.style.cssText = 'color: hsl(198, 20%, 13%)'                                                   
      })           
    } 
  });
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