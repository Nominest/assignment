let n = prompt("Check Palindromic Number");
let q = n.length
if (q === 1 ) {
    alert ('Yes');
}
else if (q === 2 && n[0] === n[1]) {
    alert ('Yes')
}
else if (q === 3 && n[0] === n[2]) {
    alert ('Yes')
}
else if (q === 4 && n[0] === n[3] && n[1] === n[2]) {
    alert ('Yes')
} else {
    alert ('No')
}


    



    
   
