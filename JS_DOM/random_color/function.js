function myFunction() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}

// let button = document.getElementsByClassName("button");
// let ppar = document.querySelector("p");
// button.addEventListener("click", function () {
//   for (let i = 0; i < ppar.length; i++) {
//     document.querySelector("p")[i].style.backgroundColor = `rgb(${Math.floor(
//       Math.random(1) * 255
//     )}, ${Math.floor(Math.random(1) * 255)}, ${Math.floor(
//       Math.random(1) * 255
//     )})`;
//   }
//   //   document.querySelector("p").style.backgroundColor = `rgb(${Math.floor(
//   //     Math.random(1) * 255
//   //   )}, ${Math.floor(Math.random(1) * 255)}, ${Math.floor(
//   //     Math.random(1) * 255
//   //   )})`;
// });
