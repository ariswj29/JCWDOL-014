/*
! Ini hanya sebagian karakteristik dari Map. Untuk list lengkapnya, silakan kunjungi MDN.
* 1. Key-Value Pair: Map menyimpan data dalam bentuk key-value pair.
* 2. Unique Keys: Map hanya bisa menyimpan key yang unik, tidak bisa menyimpan key yang sama.
* 3. No Index: Map tidak memiliki index, hanya key.
* 4. Dynamic Size: Ukuran Map bisa berubah-ubah sesuai jumlah elemen di dalamnya.
* 5. Any Data Type for Keys and Values: Map bisa menyimpan berbagai macam data (string, number, object, etc.) sebagai key dan value.
* 6. Direct Access by Key: Kita bisa mengakses elemen di dalam Map secara langsung menggunakan key.
* 7. Built-in Methods: Map memiliki berbagai macam built-in methods dan property yang bisa digunakan untuk memanipulasi data di dalamnya. Seperti: set(), get(), delete(), has(), clear(), keys(), values(), entries(), etc.
* 8. Pass-by-Reference: Map menyimpan data dengan cara pass-by-reference, bukan pass-by-value. Jadi, jika kita mengubah data di dalam Map, maka data aslinya juga akan berubah.
* 9. Iterable: Map bisa diakses menggunakan perulangan `for of`.
*/

// 1. Key-Value Pair
const map = new Map();

map.set("name", "John");
map.set("age", 25);
map.set("isMarried", false);
console.log(map); // Map(3) { 'name' => 'John', 'age' => 25, 'isMarried' => false }

// 2. Unique Keys
const uniqueSet = new Map();

uniqueSet.set("name", "John");
uniqueSet.set("name", "Doe");
uniqueSet.set("name", "Smith");
console.log(uniqueSet); // Map(1) { 'name' => 'Smith' }

// 3. No Index
const mapNoIndex = new Map();

console.log(mapNoIndex[0]); // undefined

// 4. Dynamic Size
const dynamicMap = new Map();

dynamicMap.set("name", "John"); // Size = 1
dynamicMap.set("age", 25); // Size = 2
dynamicMap.delete("age"); // Size = 1

// 5. Any Data Type for Keys and Values
const anyDataTypeMap = new Map();

anyDataTypeMap.set("name", "John");
anyDataTypeMap.set(1, "One");
anyDataTypeMap.set({ name: "John" }, "Object");
console.log(anyDataTypeMap); // Map(3) { 'name' => 'John', 1 => 'One', { name: 'John' } => 'Object' }

// 6. Direct Access by Key
const directAccessMap = new Map();

directAccessMap.set("name", "John");
directAccessMap.set("age", 25);
console.log(directAccessMap.get("name")); // John

// 7. Built-in Methods
const builtInMap = new Map();

builtInMap.set("name", "John");
builtInMap.set("age", 25);
builtInMap.set("isMarried", false);
builtInMap.delete("isMarried"); // Delete key 'isMarried'
console.log(builtInMap.has("age")); // true
console.log(builtInMap.keys()); // [Map Iterator] { 'name', 'age' }
console.log(builtInMap.values()); // [Map Iterator] { 'John', 25 }
console.log(builtInMap.entries()); // [Map Iterator] { [ 'name', 'John' ], [ 'age', 25 ] }

// 8. Pass-by-Reference
const passByReferenceMap = new Map();
const obj = { name: "John" };

passByReferenceMap.set("user", obj);
obj.name = "Doe";
console.log(passByReferenceMap.get("user")); // { name: 'Doe' }
console.log(obj); // { name: 'Doe' }

// 9. Iterable
const iterableMap = new Map();
iterableMap.set("key1", "value1");
iterableMap.set("key2", "value2");
iterableMap.set("key3", "value3");

for (const [key, value] of iterableMap) {
  console.log(key, value); // Logs every key-value pair in the map
}