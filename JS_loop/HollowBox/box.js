let output1 = "";
let n = 9;
for (let row = 1; row < n; row++) {
  for (let col = 1; col < n; col++) {
    if (row == 1 || row == n - 1 || col == 1 || col == n - 1) {
      output1 += "*";
    } else {
      output1 += " ";
    }
  }

  output1 += "\n";
}
console.log(output1);