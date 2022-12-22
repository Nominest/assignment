let foo = 5 + 6 * 7;
let bar = foo % 8;
let moo = bar * 2;
let rar = moo / 3;
function check(x) {
  if (x.length == moo) {
  }
  return moo;
}
console.log(moo);

let password;
let form = document.getElementById("form");
let input = document.getElementById("password");
let output = false;
let btn = document.getElementById("btn");
input;
btn.addEventListener("click", () => {
  if (password.length == moo) {
    output = true;
  } else {
    output = false;
  }
  if (output) {
    btn.style.display = "none";
    let nextBtn = document.createElement("a");
    nextBtn.setAttribute("href", "");
    nextBtn.setAttribute("class", "nextBtn");
    nextBtn.innerText = "Next";
    form.appendChild(nextBtn);
    document.getElementById("tip").innerHTML =
      "🎊 Баяр хүргье та амжилтай давлаа 🎉 🙌🏻!!! " +
      "<br>" +
      '<span style= " font-size: 14px;">Next дарж үргэлжлүүлнэ үү<span>';
    document.querySelector("main").style.backgroundColor =
      "rgba(0, 0, 0, 0.468);";
    document.querySelector(".tip").style.backgroundColor = "rgb(49, 214, 34)";
  } else {
    input.style.backgroundColor = "red";
    input.value = "";
    input.placeholder = "wrong!!!!";
    document.querySelector("#tip").innerText = "💩 ";
    setInterval(() => {
      document.querySelector("#tip").innerHTML = `Password hint : </br> 
       let foo = 5 + 6 * 7; </br>
       let bar = foo % 8; </br>
       let moo = bar * 2; </br>
       let rar = moo / 3; </br>
       function check(x) {  </br>
         if (x.length == moo) { </br>
           alert ("Win!")  </br>
         }  </br>
       }; `;
      input.style.backgroundColor = "black";
      input.placeholder = "Enter your password ";
    }, 1700);
  }
});
