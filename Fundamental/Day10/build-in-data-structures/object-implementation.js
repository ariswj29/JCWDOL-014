/*
! Ini hanya sebagian karakteristik dari Object. Untuk list lengkapnya, silakan kunjungi MDN.
* 1. Unordered Collection: Object menyimpan data tanpa menggunakan index, melainkan menggunakan key.
* 2. Heterogeneous: Object bisa menyimpan berbagai macam data (string, number, object, etc.) di dalamnya.
* 3. Dynamic Size: Ukuran Object bisa berubah-ubah sesuai jumlah elemen di dalamnya.
* 4. Mutable: Object bisa diubah nilainya setelah selesai dideklarasikan.
* 5. Key-Value Pair: Object menyimpan data dalam bentuk pasangan key-value. Key bersifat unik dan harus berupa string atau symbol.
* 6. Built-in Methods: Object memiliki berbagai macam built-in methods yang bisa digunakan untuk memanipulasi data di dalamnya. Seperti: Object.keys(), Object.values(), Object.entries(), etc.
* 7. Pass-by-Reference: Object disimpan di dalam memory sebagai reference, sehingga ketika kita mengubah nilai object, maka nilai object yang asli juga akan berubah.
* 8. Not iterable but enumarable: Object tidak bisa diakses menggunakan perulangan `for of`, tetapi bisa diakses menggunakan perulangan `for in`.
*/

// 1. Unordered Collection
const unorderedObj = {
    name: "John",
    age: 25,
    isMarried: false,
  };
  
  unorderedObj.name; // "John"
  unorderedObj["age"]; // 25
  unorderedObj["address"] = "Jakarta"; // Add new key-value pair to the object
  unorderedObj["age"] = 30; // Update the value of the key "age"
  
  // 2. Heterogeneous
  const heteroObj = {
    name: "John",
    age: 25,
    isMarried: false,
    address: {
      city: "Jakarta",
      country: "Indonesia",
    },
  };
  
  // 3. Dynamic Size
  const dynamicObj = {}; // Size = 0
  
  dynamicObj["name"] = "John"; // Size = 1
  dynamicObj["age"] = 25; // Size = 2
  delete dynamicObj["age"]; // Size = 1
  
  // 4. Mutable
  const mutableObj = {
    name: "John",
    age: 25,
  };
  
  mutableObj["name"] = "Doe"; // Now mutableObj becomes { name: "Doe", age: 25 }
  
  // 5. Key-Value Pair
  const keyValuePairObj = {
    name: "John",
    age: 25,
  };
  
  Object.keys(keyValuePairObj); // ["name", "age"]
  
  // 6. Built-in Methods
  const builtInObj = {
    name: "John",
    age: 25,
  };
  
  Object.keys(builtInObj); // ["name", "age"]
  Object.values(builtInObj); // ["John", 25]
  Object.entries(builtInObj); // [["name", "John"], ["age", 25]]
  
  // 7. Pass-by-Reference
  const obj1 = {
    name: "John",
    age: 25,
  };
  const obj2 = obj1;
  
  obj2["name"] = "Doe"; // This will change the value of obj1 as well
  
  // 8. Not iterable but enumarable
  const enumerableObj = {
    name: "John",
    age: 25,
  };
  
  for (const key in enumerableObj) {
    console.log(enumerableObj[key]); // Logs every value in the object
  }