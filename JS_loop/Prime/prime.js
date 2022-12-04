let n = prompt("Prime number checker");
let out = true;
if ( n ===1 ) {
    alert("Prime Number")
} else if ( n > 1 ) {
    for ( let i = 2; i < n; i++ ) {
        if (n % i == 0 ) {
            out = false;
            break;
        }
    }
if ( out ) {
    alert ('True')
} else {
    alert ('False')
} }