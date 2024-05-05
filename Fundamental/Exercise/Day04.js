function Calculator(number1, number2, action){
    if(action == "+"){
        console.log(number1 + number2)
    }
    else if(action == "-"){
        console.log(number1 - number2)
    }
    else if(action == "*"){
        console.log(number1 * number2)
    }
    else if(action == "/"){
        console.log(number1 / number2)
    }
    else{
        console.log("not found")
    }
}

Calculator(2, 3, "+")
// console.log(Calculator())