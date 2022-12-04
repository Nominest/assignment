let output = "";
let n = 9;
for (let row = 1; row < n; row ++) {
    for (let col = 1; col < n ; col ++){
        if ( col <= n + row - 1 && col >= n - row + 1 && row % 2 == 0 ) {
        output += " " + "*";
    } else {
        output += " ";
  
    }
}

     output += "\n";
}
console.log(output)