/****************************************************
*               The Unary + Operator                *
****************************************************/
function myFunction() {
  var y = "5";
  var x = + y;
  document.getElementById("unary-op").innerHTML = typeof y + "<br>" + typeof x;
}

/****************************************************
*              Automatic Type Conversion            *
****************************************************/
var x = [];
document.getElementById("automatic").innerHTML =
(5 + null) + "<br>"  +
("5" + null) + "<br>" +
("5" + 2) + "<br>" +
("5" - 2) + "<br>" +
("5" * "2") + "<br>" +
("5" / "2") + "<br>";

/****************************************************
*           JavaScript Type Conversion Table        *
****************************************************/
var x = false;
document.getElementById("false-conv").innerHTML =
"Number : " + Number(x) + "<br>" +
"String : " + String(x) + "<br>" +
"Boolean: " + Boolean(x);
