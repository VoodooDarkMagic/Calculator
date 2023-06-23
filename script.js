const Btn = document.querySelectorAll('.button');
const btnAC = document.querySelector('.reset');

let displayNumber = document.querySelector('.output')
displayNumber.textContent = '';

let displayHistory = document.querySelector('.history')
displayHistory.textContent = '';

function addition(num1,num2){
    return num1 + num2;
}

function subtraction(num1,num2){
    return num1 - num2;
}

function multiplication(num1, num2){
    return num1*num2;
}

function division(num1, num2){
    return num1/num2;
}



let num1 = '';
let num2 = '';
let num = '';
let operator = '';
let result = '';

Btn.forEach((button) => {
    button.addEventListener('click', function(){
        if (button.classList.contains('number')){
            //console.log(button.textContent)
            displayNumber.textContent += button.textContent;
        }if (button.classList.contains('operator')){

            //operator = button.textContent;

            num = Number(displayNumber.textContent);
            displayNumber.textContent = ''

            if (num1 === ''){
                num1 = num;
                console.log(num1)
                displayNumber.textContent = '';
            } else if(num1 !== ''){
                num2 = num;
                console.log(num2)
                displayNumber.textContent = '';
            }
            operator = button.textContent;

            if(operator === '+'){
                result = addition(num1,num2)
                num1 = result;
                num2 = '';
            } else if(operator === '-'){
                result = subtraction(num1,num2);
                num1 = result;
                num2 = '';
            } else if(operator === '*'){
                result = multiplication(num1,num2);
                num1 = result;
                num2 = '';
            } else if (operator === '/'){
                result = division(num1,num2)
                num1 = result;
                num2 = '';
            }
            
            displayHistory.textContent = result;
            displayNumber.textContent = ''
            console.log(operator)
        } 
        
    })
})


btnAC.addEventListener('click',function(){
    displayNumber.textContent = ''
    displayHistory.textContent = ''
    num = '';
    num1 = '';
    num2 = '';
    operator = '';
})