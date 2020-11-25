let button = document.getElementById("generate");
  button.onclick = function generate() {
  let randomNum = Math.floor((Math.random() * 100000) + 3);
  let el = document.getElementById('ranNum');
  el.innerHTML = randomNum;
 }