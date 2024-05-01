// Soal 1
const celcius = 60

if(celcius === 60){
    console.log(celcius + ' celcius = 140 Fahrenheit')
}else{
    console.log(celcius + ' celcius != 140 Fahrenheit')
}

// Soal 2
const number = 20

if(number % 2 === 0){
    console.log(number + ' adalah bilangan genap')
}else{
    console.log(number + ' adalah bilangan ganjil')
}

// Soal 3
let primeNumber = 6
if (primeNumber <= 1) {
    console.log(primeNumber + " bukan bilangan prima");
  } else if (primeNumber <= 3) {
    console.log(primeNumber + " adalah bilangan prima");
  }else if(primeNumber % 2 === 0 || primeNumber % 3 === 0){
    console.log(primeNumber + " bukan bilangan prima");
}else{
    let isPrime = true
    for(let i = 5; i * i <= primeNumber; i += 6){
        if(primeNumber % i === 0 || primeNumber % (i + 2) === 0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        console.log(primeNumber + " adalah bilangan prima")
    }else{
        console.log(primeNumber + " bukan bilangan prima")
    }
}

// Soal 4
let lastNumber = 5
let total = 0
for(let i = 1; i <= lastNumber; i++){
    total += i
}
console.log(total)

// Soal 5 
let factorialNumber = 4
let output = 1
for(let i = 1; i <= factorialNumber; i++){
    output *= i
}
console.log(output)

// Soal 6 
let fibonacci = 15;
// fibonacci = 16

let fibList = [0, 1];
while (fibList.length <= fibonacci) {
    fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
}
console.log(fibList[fibonacci - 1]);
