
let text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Last few coding days before the weekend";
    break;
  case 0:
  case 6:
    text = "Weekend!";
    break;
  default:
    text = "Busy learning HTML in class";
}

document.getElementById("javass").innerHTML = text;


function displayDate() {
  document.getElementById("time").innerHTML = Date();
}
