export default function sumPlus10(a, b) {
  return a + b + 10;
}

// console.log(sumPlus10(5, 5)); // 3

export function max(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return a;
  }
}

export function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return num;
  }
}

export function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num < 0) {
    return NaN;
  } else if (num === undefined) {
    return undefined;
  } else {
    return num * factorial(num - 1);
  }
}
