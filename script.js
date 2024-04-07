let num1
let num2
let oporator
let operatorIndex

function add(num1 , num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function mutplie(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1/num2
}
function comput(num1, oporator, num2){
    switch(oporator){
        case("+"):{
            return add(num1,num2)
        }
        case("-"):{
            return subtract(num1,num2)
        }
        case("*"):{
            return mutplie(num1,num2)
        }
        case("/"):{
            return(num1,num2)
        }

    }
}
const buttons = document.querySelectorAll(".number")

for(let i of buttons){
    i.addEventListener("click",
    function(){
        if( document.querySelector(".display").textContent[1] === " "){// checks to see if white spaces after filler text
            document.querySelector(".display").textContent = i.innerHTML
        }else{
            document.querySelector(".display").textContent += i.innerHTML
        }      
    })
}
const oporatorsList = document.querySelectorAll(".operator")

for(let i of oporatorsList){
    i.addEventListener("click",
    function (){
        let input = document.querySelector(".display").textContent // cont is not used as the for of loop remames input
        num1 = input
        oporator = i.textContent
        input += i.textContent
        operatorIndex = input.length - 1

    })
}
