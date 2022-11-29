const bill_1 = 3000;
const bill_2 = 27500; 
const bill_3 = 100000;
let bill;
let tax_per = bill >= 5000 && bill <= 30000 ? 0.15 : 0.2;

bill = bill_1;
console.log(`Tulbur 3.000₮ garsan ued tax orson niit tulbur : ₮${bill * tax_per + bill}`);
bill = bill_2;
console.log(`Tulbur 27.500₮ garsan ued tax orson niit tulbur : ₮${bill * tax_per + bill}`);
bill = bill_3;
console.log(`Tulbur 100.000₮ garsan ued tax orson niit tulbur : ₮${bill * tax_per + bill}`);
