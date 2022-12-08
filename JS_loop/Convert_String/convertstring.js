let str = "enter text here ee";
let sent = "";
for (i = 0; i < str.length; i++) {
  sent[i] = str[i][0].toLocaleUpperCase() + str[i].substring(1);
}
// let first = str[0].toLocaleUpperCase() + str.substring(1);
// // let tail = str.slice(1);
console.log(sent);
