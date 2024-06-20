let count = 123;
let firstName = "John";
let level;
let zero: undefined = undefined;
let empty: null = null;
let func = () => {};
let isLoading: boolean = true;
const object = {};
const arr0 = [];
const arr1 = [1, 2, 3];
const arr2 = ["one", "two", "three"];
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
];
const arr4 = [{}, {}];
const arr5 = [true, false];
const arr6 = [null, null];
const arr7 = [undefined, undefined];
const arr8 = [NaN, NaN];
const arr9 = [() => {}, () => {}];
const arr10 = [1, "satu", true];
const arr11: (number | string)[] = [];

function greet(name: unknown) {
  console.log(`Hello, ${name}!`);
}

greet("John");
greet(123);

function greetHim(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greetHim("Widodo", new Date());
