"use strict";
let count = 123;
let firstName = "John";
let level;
let zero = undefined;
let empty = null;
let func = () => { };
let isLoading = true;
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
const arr9 = [() => { }, () => { }];
const arr10 = [1, "satu", true];
const arr11 = [];
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("John");
greet(123);
function greetHim(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greetHim("Widodo", new Date());
