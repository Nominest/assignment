// let input = prompt("Enter Text Here")
function check(pali) {
  let reversedPali = pali.reverse();
  if (pali.split("") == reversedPali.split("")) {
    return "True";
  } else {
    return "False";
  }
}
console.log(check("nonon"));
