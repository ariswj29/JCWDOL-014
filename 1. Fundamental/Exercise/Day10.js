/* 1. Find the unique values.
 */
function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];
  
  console.log('Exercise 1:', unique(values)); // Hare, Krishna, :-O
  
  /*
  2. Write a function aclean(arr) that returns an array cleaned from anagrams.
  */

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join(""); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }

  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log('Exercise 2', aclean(arr)); // "nap,cteachers, ear" or "PAN, cheaters, era"
  
  /*
  3. Solve the error!
  */
  let map = new Map();
  
  map.set("name", "John");
  
  let keys = map.keys();

  keys = Array.from(keys);
  
  keys.push("more"); // Error: keys.push is not a function

  console.log('Exercise 3:', keys)
  
  