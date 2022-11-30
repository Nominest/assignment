//1
let Name = "Nomin";
let fullName = "Nomin Oyunbadrakh";
console.log(Name.length);
console.log(fullName.length);

//2&3 lowercase uppercase
let lowernamecase = "Nomin Oyunbadrakh";
let UppernameCase = "Nomin Oyunbadrakh";
console.log(lowernamecase.toLowerCase());
console.log(UppernameCase.toUpperCase());

//4 concat
let pinecone = "Pinecone academy-n ";
let fullsent = pinecone.concat("leap hutulburt tavtai morilno uu");
console.log(fullsent);

//5
let firstName = "Nomin ";
let lastName = "Oyunbadrakh ";
let country = "Mongolia ";
let age = "26 ";
let about = "Namaig " + firstName + lastName.concat("gedeg.");
console.log(about);

//6
let rand = "12345";
console.log(rand);
console.log(rand.substring(1).concat(rand.length - 4));
console.log(
  rand
    .substring(2)
    .concat(rand.length - 4)
    .concat(rand.length - 3)
);
console.log(
  rand
    .substring(3)
    .concat(rand.length - 4)
    .concat(rand.length - 3)
    .concat(rand.length - 2)
);
console.log(
  rand
    .substring(4)
    .concat(rand.length - 4)
    .concat(rand.length - 3)
    .concat(rand.length - 2)
    .concat(rand.length - 1)
);
