//total payment
function payment(bill) {
  
    if (bill < 30000 && bill > 5000) {
        return bill * 0.15 + bill
    } else {
        return  bill * 0.2 + bill
    }
}
console.log(payment(3000));
console.log(payment(27500));
console.log(payment(100000));

//tax only
function tax(bill) {
  
    if (bill < 30000 && bill > 5000) {
        return bill * 0.15 
    } else {
        return  bill * 0.2
    } 
}
console.log(tax(3000));
console.log(tax(27500));
console.log(tax(100000));

//average
function average(bill1, bill2, bill3) {
 return (bill1 + bill2 + bill3)/3
}
console.log(average(3000,27500,100000));
