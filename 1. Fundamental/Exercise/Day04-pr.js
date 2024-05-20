// ----- Exercise 1 (Create a function that can create a triangle pattern according to the height we provide like the following :) -----

function trianglePattern(number){
    let row = ''
    for(let i = 0; i >= number; i++){
        for(let j = 0; j >= i; j++){
            row += '*'
        }
        row += '\n'
    }
    // console.log(row)
    return row
}

console.log(trianglePattern(4))

// ----- Exercise 2 (Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".) -----

// function buzzFizz(n){
//     for(let i = 1; i <= n; i++){
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i)
//         }
//     }
// }
// buzzFizz(15)

// ----- Exercise 3 (Create a function to calculate Body Mass Index (BMI)), Formula : BMI = weight (kg) / (height (meter))²  -----

// function bmi(weight, height){
//     if(weight / height < 18.5){
//         return "Less Weight"
//     }else if(weight / height > 18.5 && weight / height <= 24.9){
//         return "Ideal"
//     }else if(weight / height >= 25.0 && weight / height <= 29.9){
//         return "Overweight"
//     }else if(weight / height >= 30.0 && weight / height < 39.9){
//         return "Very Overweight"
//     }else if(weight / height > 39.9){
//         return "Obesity"
//     }else{
//         return "Not Working"
//     }
// }

// console.log(bmi(70, 1.50), 70/1.50)

// ----- Exercise 4 (Write a function to remove all odd numbers in an array and return a new array that contains even numbers only) -----
// let number = [1,2,3,4,5,6,7,8,9,10] 
// function oddNumber(number){
//     let num = number.filter((item) => {
//         if(item % 2 === 0){
//             return item
//         }
//     })
//     return num
// }

// console.log(oddNumber(number))


// ----- Exercise 5 (Write a function to split a string and convert it into an array of words) -----

// function splitString(string){
//     let arrString = string.split(" ")
//     console.log(arrString)
// }

// splitString("Hello World")