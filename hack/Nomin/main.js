let password = "Password";
let form = document.querySelector(".form");
let input = document.querySelector(".password");
let output = false;
let btn = document.querySelector(".btn");
input;
btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (password == inputValue) {
    output = true;
  } else {
    output = false;
  }
});

//   if (output) {
//     btn.style.display = "none";
//     let nextBtn = document.createElement("a");
//     nextBtn.setAttribute("href", "");
//     nextBtn.setAttribute("class", "nextBtn");
//     nextBtn.innerText = "Next";
//     form.appendChild(nextBtn);
//     document.getElementById("tip").innerHTML =
//       "Баяр хүргье та амжилтай давлаа !!! " +
//       "<br>" +
//       '<span style= " font-size: 14px;">Next дарж үргэлжлүүлнэ үү<span>';
//   }
// });
