// Write a code to find angles of triangle if two angles are given.

// const a = 80;
// const b = 65;
// const c = 180 - (a + b);

// console.log("sudut c adalah : " + c);

// ======================================================================

// Write a code to get difference between dates in days.

const date1 = new Date("2023-10-05");
const date2 = new Date("2023-10-20");
const bedaTanggal = Math.abs(date2 - date1); // math absolute -> hasilnya akan selalu positif

const bedaHari = Math.round(bedaTanggal / (1000 * 3600 * 24)); // membulatkan angka
console.log("Perbedaan hari : " + bedaHari);

// ======================================================================

// Write a code to convert days to years, months and days.
// Example : 400 days → 1 year, 1 month, 5 days
// 1 year : 365 days, 1 month : 30 days

const hari = 400;
const tahun = Math.floor(hari / 365);
const bulan = Math.floor((hari % 365) / 30);
const tanggal = Math.floor((hari % 365) % 30);

console.log(tahun + " tahun " + bulan + " bulan " + tanggal + " hari");