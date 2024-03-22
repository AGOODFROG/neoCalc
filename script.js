let num1
let num2
let oporator

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

console.log(comput(4,"/",2))