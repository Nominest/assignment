let number = prompt("Enter Number Here")
let random = (Math.floor(Math.random() * 100) + 1); 
if (number > random) {
    alert ("Input number " + number + " is greater than random number " + random)
}
else if (number === random) {
    alert ("Input number " + number + " is equal to " + random)
}
else {
    alert ("Input number " + number + " is less than random number " + random)
}