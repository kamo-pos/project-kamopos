let array = [
  {
    id: 1,
    harga: 10000,
    total: []
  },
  {
    id: 2,
    harga: 20000,
    total: []
  }
];

let totalHarga = 0;

// const sumTotalHarga = array.map(item => {
//   totalHarga += array[item].harga;

//   return totalHarga;
// });

for (i = 0; i < array.length; i++) {
  totalHarga += array[i].harga;
}

console.log(totalHarga);
