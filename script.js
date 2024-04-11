let num1
let num2
let oporator
let operatorIndex



function add(num1 , num2){
    
    return Number(num1) + Number(num2)
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
function parseNum2(){
    let input = document.querySelector(".display").textContent 
    num2 = input.slice(operatorIndex+1,input.length)
    input = comput(num1,oporator,num2)
    document.querySelector(".display").textContent = input
    // reseting vaules
    num1 = input
    num2 = undefined 
    oporator = undefined
    operatorIndex = undefined
}


function comput(num1, oporator, num2){
    switch(oporator){
        case("+"):{
            return add(num1,num2).toFixed(2)
        }
        case("-"):{
            return subtract(num1,num2).toFixed(2)
        }
        case("*"):{
            return mutplie(num1,num2).toFixed(2)
        }
        case("/"):{
            return divide(num1,num2).toFixed(2)
        }

    }
}
const buttons = document.querySelectorAll(".number")

for(let i of buttons){
    i.addEventListener("click",
    function(){
            document.querySelector(".display").textContent += i.textContent    
    })
}
const oporatorsList = document.querySelectorAll(".operator")


for(let i of oporatorsList){
    i.addEventListener("click",
    function (){
        let input = document.querySelector(".display").textContent // cont is not used as the for of loop remames input
       
        
        if(operatorIndex !== undefined){
            parseNum2()
        }else if(input.length === 0 && i.textContent === "-"){
            document.querySelector(".display").textContent += "-"
        }
        else{ 
            num1 = input
            oporator = i.textContent
            input += i.textContent
            operatorIndex = input.length - 1
            document.querySelector(".display").textContent = input // appeneds to th webpage
        }
    })
}
document.querySelector(".equal").addEventListener("click",parseNum2)
document.querySelector(".clear").addEventListener("click",function(){
    document.querySelector(".display").textContent = ""
})
document.querySelector(".backspace").addEventListener("click",function(){
    document.querySelector(".display").textContent = document.querySelector(".display").textContent.slice(0,-1)
    
})
 

