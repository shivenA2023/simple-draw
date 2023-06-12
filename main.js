//Paint
console.log("hi");

//Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
let mouseIsPressed = false;
let mouseX, mouseY;
let size = 10;
let col = "black";

//Animate
requestAnimationFrame(loop);
//Draw Background

function loop() {
  //Update Variables

  //Draw
  if (mouseIsPressed) {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, size, 0, 2 * Math.PI);
    ctx.fill();
  }

  requestAnimationFrame(loop);
}

//Event
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
  mouseIsPressed = true;
}
function mouseupHandler() {
  mouseIsPressed = false;
}
function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
function keydownHandler(event) {
  if (size < 1) {
    size += 10;
  }
  if (event.code == "Space") {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
    console.log(size);
  } else if (event.code == "ArrowDown") {
    size--;
    console.log(size);
  }
}

//ColPick

document.getElementById("colorPicker").addEventListener("change", changeColor);

function changeColor() {
  size = 10;
  col = document.getElementById("colorPicker").value;
}
