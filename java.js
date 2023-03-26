// question number-1;

let a = document.getElementById("text");
function callme() {
  console.log(a.innerText);
}

let b2 = document.getElementsByTagName("h1");
console.log(b2[0].innerText);

let c = document.getElementsByClassName("box");
console.log(c[0].innerText);

let d = document.getElementById("q4");
function call() {
  console.log(q4.innerText);
  q4.innerText = "HELLO WORLD";
}

let e = document.getElementById("q5");
function calll() {
  e.innerText = "welcome to elevation academy ";
  console.log(e.innerText);
}

let f = document.getElementById("q6");
let btn = document.getElementById("callll");
btn.addEventListener("click", () => {
  f.setAttribute("style", "background-color:red");
});

let parent = document.getElementById("parent");
let bttn = document.getElementById("sbmt");
bttn.addEventListener("click", () => {
  parent.setAttribute("style", "flex-direction:column");
});

function D() {
  let time = new Date();
  let hours = time.getHours();
  let mins = time.getMinutes();
  let sec = time.getSeconds();

  let timeZone = `   ${hours}  :${mins} : ${sec}`;
  input.innerText = timeZone;
}
setInterval(() => {
  D();
}, 1000);
