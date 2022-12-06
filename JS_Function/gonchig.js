function bill(bill1, bill2, bill3) {
  let total;
  if (bill < 30000 && bill > 5000) {
    total = bill * 0.15 + bill;
  } else {
    total = bill * 0.2 + bill;
  }
  return total;
}
let bill1 = 25000,
  bill2 = 27500,
  bill3 = 100000;
console.log(bill1);
