/*
! Ini hanya sebagian karakteristik dari Set. Untuk list lengkapnya, silakan kunjungi MDN.
* 1. Unique Values: Set hanya bisa menyimpan nilai yang unik, tidak bisa menyimpan nilai yang sama.
* 2. No Key-Value Pair/Index: Set tidak memiliki key ataupun index, hanya value.
* 3. Unique Heterogeneous: Set bisa menyimpan berbagai macam data (string, number, object, etc.) di dalamnya tetapi Object harus memiliki reference yang sama untuk dianggap sebagai value yang sama.
* 4. Dynamic Size: Ukuran Set bisa berubah-ubah sesuai jumlah elemen di dalamnya.
* 5. Built-in Methods: Set memiliki berbagai macam built-in methods dan property yang bisa digunakan untuk memanipulasi data di dalamnya. Seperti: add(), delete(), has(), clear(), etc. Beberapa built-in methods belum bisa diimplementasikan di browser/engine lama.
* 6. No Direct Access by Index/Key: Karena Set tidak memiliki index/key, maka kita tidak bisa mengakses elemen di dalam Set secara langsung.
* 7. Pass-by-Reference: Set menyimpan data dengan cara pass-by-reference, bukan pass-by-value. Jadi, jika kita mengubah data di dalam Set, maka data aslinya juga akan berubah.
* 8. Iterable: Set bisa diakses menggunakan perulangan `for of`.
*/

// 1. Unique Values
const uniqueSet = new Set([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8]);

console.log(uniqueSet); // Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// 2. No Key-Value Pair
const unorderedSet = new Set([1, 2, 3, 4, 5]);

console.log(unorderedSet); // Set { 1, 2, 3, 4, 5 }

// 3. Unique Heterogeneous
const heteroSet = new Set([1, "John", { name: "John" }]);

heteroSet.add({ name: "John" });
console.log(heteroSet); // Set { 1, "John", { name: "John" }, { name: "John" } }

// 4. Dynamic Size
const dynamicSet = new Set();

dynamicSet.add(1); // Size = 1
dynamicSet.add(2); // Size = 2
dynamicSet.delete(2); // Size = 1

// 5. Built-in Methods
const builtInSet1 = new Set([1, 2, 3]);
const builtInSet2 = new Set([1, 2, 3]);

builtInSet1.add(4); // Set { 1, 2, 3, 4 }
builtInSet1.delete(4); // Set { 1, 2, 3 }
builtInSet1.has(3); // true
builtInSet1.clear(); // Set {}
builtInSet1.size; // 0

// builtInSet1.difference(builtInSet2); // Set { 1, 2, 3 } Still ERROR because it is not widely implemented yet.

// 6. No Direct Access by Index/Key
const set = new Set([1, 2, 3]);

console.log(set[0]); // undefined
console.log(set["0"]); // undefined

// 7. Pass-by-Reference
const originalSet = new Set([{ name: "John" }]);
const duplicateSet = originalSet;

duplicateSet.add({ name: "Jane" });
console.log(originalSet); // Set { { name: "John" }, { name: "Jane" } }
console.log(duplicateSet); // Set { { name: "John" }, { name: "Jane" } }

// 8. Iterable
const iterableSet = new Set([1, 2, 3, 4, 5]);

for (const element of iterableSet) {
  console.log(element); // Logs every element in the set
}