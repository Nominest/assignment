let button = document.getElementsByTagName("button");
button[0].addEventListener("click", function () {
  const ppar = document.querySelectorAll(".example");
  console.log(ppar);
  for (i = 0; i < ppar.length; i++) {
    ppar[i].style.backgroundColor = `rgb(${Math.floor(
      Math.random(1) * 255
    )}, ${Math.floor(Math.random(1) * 255)}, ${Math.floor(
      Math.random(1) * 255
    )})`;
  }
});
