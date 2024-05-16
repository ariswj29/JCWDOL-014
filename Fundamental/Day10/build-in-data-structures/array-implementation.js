/*
! Ini hanya sebagian karakteristik dari Array. Untuk list lengkapnya, silakan kunjungi MDN.
* 1. Ordered Collection: Array menyimpan data secara berurutan dan menandainya menggunakan index, mulai dari index 0 hingga index n-1.
* 2. Heterogeneous: Array bisa menyimpan berbagai macam data (string, number, object, etc.) di dalamnya.
* 3. Dynamic Size: Ukuran Array bisa berubah-ubah sesuai jumlah elemen di dalamnya.
* 4. Mutable: Array bisa diubah nilainya setelah selesai dideklarasikan.
* 5. Iterable: Array bisa diakses menggunakan perulangan `for of`.
* 6. Built-in Methods: Array memiliki berbagai macam built-in methods yang bisa digunakan untuk memanipulasi data di dalamnya. Seperti: push, pop, shift, unshift, splice, slice, map, filter, reduce, forEach, find, findIndex, etc.
* 7. Pass-by-Reference: Array disimpan di dalam memory sebagai reference, sehingga ketika kita mengubah nilai array, maka nilai array yang asli juga akan berubah.
*/

// 1. Ordered Collection
const orderedArr = [1, 2, 3, 4, 5];

// 2. Heterogeneous
const heteroArr = [1, 2, 3, 4, 5, { name: "John" }, 5, 1, [1, 2, 3, 4]];

// 3. Dynamic Size
const dynamicArr = []; // Size = 0

dynamicArr.push(1); // Size = 1
dynamicArr.push(2); // Size = 2
dynamicArr.pop(); // Size = 1

// 4. Mutable
const mutableArr = [1, 2, 3, 4, 5];

mutableArr[0] = 10; // Now mutableArr becomes [10, 2, 3, 4, 5]

// 5. Iterable
const iterableArr = [1, 2, 3, 4, 5];
for (const element of iterableArr) {
  console.log(element); // Logs every element in the array
}

// 6. Built-in Methods
const builtInArr = [1, 2, 3, 4, 5];

builtInArr.push(6); // [1, 2, 3, 4, 5, 6]
builtInArr.pop(); // [1, 2, 3, 4, 5]
builtInArr.shift(); // [2, 3, 4, 5]
builtInArr.unshift(1); // [1, 2, 3, 4, 5]
builtInArr.splice(2, 1); // [1, 2, 4, 5]
builtInArr.slice(1, 3); // [2, 4]
builtInArr.map((element) => element * 2); // [2, 4, 8, 10]
builtInArr.filter((element) => element % 2 === 0); // [2, 4]
builtInArr.reduce((acc, curr) => acc + curr, 0); // 12
builtInArr.forEach((element) => console.log(element)); // Logs every element in the array

// 7. Pass-by-Reference
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

arr2[0] = 10; // This will change the value of arr1 as well

console.log(arr1); // [10, 2, 3, 4, 5]
console.log(arr2); // [10, 2, 3, 4, 5]