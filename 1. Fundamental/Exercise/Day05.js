/** 
 * ----- SLIDE 1 EXERCISE 1 -----
    Write a function to get the lowest, highest and average value in the array (with and without sort function).
    a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

// function getLowestHighestAverage(arr){
//     let lowest = arr[0]
//     let highest = arr[0]
//     let total = 0
//     for(let i=0; i<arr.length; i++){
//         total += arr[i]
//         if(arr[i] < lowest){
//             lowest = arr[i]
//         }
//         if(arr[i] > highest){
//             highest = arr[i]
//         }
//     }
//     return { lowest, highest, average: total/arr.length }
    
// }

// console.log(getLowestHighestAverage([12, 5, 23, 18, 4, 45, 32]))


/**
 * ----- SLIDE 1 EXERCISE 2 -----
    Write a function that takes an array of words and returns a string by concatenating the words in the array,
    separated by commas and - the last word - by an 'and'.
    a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

// function concatWords(arr){
//     let result = ''
//     for(let i=0; i<arr.length; i++){
//         if(i === arr.length-1){
//             result += `and ${arr[i]}`
//         }else{
//             result += `${arr[i]}, `
//         }
//     }
//     return result
// }

// console.log(concatWords(['apple', 'orange', 'banana', 'grape']))

// Exercise 3: Write a function to split a string and convert it into an array of words


/**
 * SLIDE 1 EXERCISE 3
    Write a function to split a string and convert it into an array of words
    a. Example : “Hello World” → [“Hello”, “World”]
 */

// function splitString(str){
//     // return str.split(' ')
//     let result = []
//     let word = ''
//     for(let i=0; i<str.length; i++){
//         if(str[i] === ' '){
//             result.push(word)
//             word = ''
//         }else{
//             word += str[i]
//         }
//     }
//     return result.concat(word)
// }

// console.log(splitString('Hello World!'))


/**
 * SLIDE 1 EXERCISE 4
    Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
    of the same length.
    a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

 */

// function sumArray(arr1, arr2){
//     let result = []
//     for(let i=0; i<arr1.length; i++){
//         result.push(arr1[i] + arr2[i])
//     }
//     return result
// }

// console.log(sumArray([1, 2, 3], [3, 2, 1]))


/**
 * SLIDE 1 EXERCISE 5
    Write a function that adds an element to the end of an array. However, the element should only be added if it is
    not already in the array.
    a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
    b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
 */

// function addElement(arr, newElement){
//     if(arr.includes(newElement)){
//         return arr
//     }else{
//         arr.push(newElement)
//         return arr
//     }
// }

// console.log(addElement([1, 2, 3, 4], 3))


/**
 * SLIDE 2 EXERCISE 1
    Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
    a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
*/

// function oddNumber(number){
//     let result = [];
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] % 2 == 0) {
//             result.push(number[i]); 
//         }
//     }
//     return result;
// }

// console.log(oddNumber([1, 2, 3, 4, 5, 6]))


/**
 * SLIDE 2 EXERCISE 2
    Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
    array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
    array can only contain 5 elements).
    a. Example :
    maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
    The function will return [5, 10, 24, 3, 6]
 */

// function integerToArray(number, maxSize){
//     let result = []
//     number = number.split(",");
//     for(let i=1; i<=maxSize; i++){
//         result.push(number[i])
//     }
//     return result
// }
// let number = "5, 10, 24, 3, 6, 7, 8"

// console.log(integerToArray(number, 5))


/**
 * SLIDE 2 EXERCISE 3
    Write a function that will combine 2 given array into one array
    a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] 

 */

// function combineArray(arr1, arr2){
//     let result = arr1.concat(arr2);
//     return result;
// }

// console.log(combineArray([1, 2, 3], [4, 5, 6]))


/**
 * SLIDE 2 EXERCISE 4
    Write a function to find duplicate values in an array
    a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 

 */

// function duplicateValue(number){
//     let duplicates = number.filter((item, index) => {
//         return number.indexOf(item) !== index;
//     });

//     let result = duplicates.reduce((acc, curr) => {
//         if (acc.indexOf(curr) === -1) {
//             acc.push(curr);
//         }
//         return acc;
//     }, []);

//     return result;
// }

// console.log(duplicateValue([1, 2, 2, 2, 3, 3, 4, 5, 5]))


/**
 * SLIDE 2 EXERCISE 5
    Write a function to find the difference in 2 given array
    a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 
*/

// function differenceTwoArray(arr1, arr2){
//     let array = arr1.filter(item => !arr2.includes(item))
    
//     let result = array.concat(arr2.filter(item => !arr1.includes(item))) 
//     return result;
// }

// console.log(differenceTwoArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))


/**
 * SLIDE 3 EXERCISE 1
    Based on the array below write a function that will return primitive data types only. let
    arr = [1, [], undefined, {}, "string", {}, []];
    a. The function will return [1, undefined, “string”]

 */

// function primitiveDataType(arr){
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         if (
//             typeof arr[i] === "string" ||
//             typeof arr[i] === "number" ||
//             typeof arr[i] === "bigint" ||
//             typeof arr[i] === "boolean" ||
//             arr[i] === null ||
//             typeof arr[i] === "undefined"
//         ) {
//             result.push(arr[i]);
//         }
//     }

//     return result
// }

// console.log(primitiveDataType([1, [], undefined, {}, "string", {}, []]))


/**
 * SLIDE 3 EXERCISE 2
    Write a function from a given array of numbers and return the second smallest number
    a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

 */

// function secondSmallestNumber(number){
//     number.sort((a, b) => a - b);

//     let result = number[1];

//     return result;
// }

// console.log(secondSmallestNumber([5, 3, 1, 7, 2, 6]))


/**
 * SLIDE 3 EXERCISE 3
    Write a function from a given array of mixed data types and return the sum of all the number
    a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
 */

// function mixesDataType(mixedArray) {
//     let result = []
//     const numberType = ["number"]
//     for(let i = 0; i <= mixedArray.length; i++){

//     }
// }

// console.log(mixesDataType(["3", 1, "string", null, false, undefined, 2]));
    


/**
 * SLIDE 3 EXERCISE 4
    Write a function from the below array of number that will return sum of duplicate values. let
    arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
    a. The function will return 40
 */

// function duplicateValue(arr){
    
// }

// console.log(duplicateValue([10, 20, 40, 10, 50, 30, 10, 60, 10]))


/** 
 * SLIDE 3 EXERCISE 5
    Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
    between rock, paper, or scissor.
    a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
 */

// function game(me){
//     let cpu = ['rock', 'paper', 'scissors'];
//     let randomIndex = Math.floor(Math.random() * cpu.length);
//     if(me == 'rock' && randomIndex == 0 ){
//         return `Imbang, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'paper' && randomIndex == 0 ){
//         return `Menang, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'scissors' && randomIndex == 0 ){
//         return `Menang, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'rock' && randomIndex == 1 ){
//         return `Kalah, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'paper' && randomIndex == 1 ){
//         return `Imbang, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'scissors' && randomIndex == 1 ){
//         return `Imbang, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'rock' && randomIndex == 2 ){
//         return `Menang, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'paper' && randomIndex == 2 ){
//         return `Kalah, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }else if(me == 'scissors' && randomIndex == 2 ){
//         return `Imbang, Kamu ${me} dan Cpu ${cpu[randomIndex]}`
//     }
// }

// let me = 'rock'
// console.log(game(me))