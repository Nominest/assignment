let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
//printing array
console.log(itCompanies);
//printing length
console.log(itCompanies.length);
//printing first element of array
console.log(itCompanies[0]);
//printing last element of array
console.log(itCompanies[itCompanies.length - 1]);
//printing middle element of array
console.log(itCompanies[3]);
//printing every element
for ( i = 0; i < itCompanies.length; i ++ )  {
    console.log(itCompanies[i] + " ")
}
//uppercase first letter
for ( q = 1; q < itCompanies.length; q ++) {
console.log(itCompanies[q].toUpperCase() + " ");
}
//sentence
console.log(itCompanies.toString() + " зэрэг мэдээллийн технологийн томоохон компаниуд.");
    