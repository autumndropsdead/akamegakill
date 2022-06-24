let stbl1 = document.getElementById('stepbl1');
let stepbrdr1 = document.getElementById('stepbrdr1');

let stbl2 = document.getElementById('stepbl2');
let stepbrdr2 = document.getElementById('stepbrdr2');

let stbl3 = document.getElementById('stepbl3');
let stepbrdr3 = document.getElementById('stepbrdr3');

stbl1.onmouseover = function() {
  stepbrdr1.style.borderBottom = '3px solid white';
}
stbl1.onmouseout = function() {
  stepbrdr1.style.borderBottom = '3px solid black';
}

stbl2.onmouseover = function() {
  stepbrdr2.style.borderBottom = '3px solid white';
}
stbl2.onmouseout = function() {
  stepbrdr2.style.borderBottom = '3px solid black';
}

stbl3.onmouseover = function() {
  stepbrdr3.style.borderBottom = '3px solid white';
}
stbl3.onmouseout = function() {
  stepbrdr3.style.borderBottom = '3px solid black';
}