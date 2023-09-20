const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//canvas settings
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.shadowColor = "#03091d";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 10;
let color = "hsl(300,100%,50%)"; //(hue, saturation,lightness)

//effect settings
let size = Math.min(canvas.width / 15, canvas.height / 15);
let sides = 6; //no. of main branches
let spread = 1.05; // the angle the child brand fans away from the parent branch
let scale = 1; //size of each smaller segment of the branches;  <1, branches shrink, >1 branches grow
let branches = 1; //no. child branches drawn for each parent branch
let maxLevel = 5; //depth of the fractal; no. of times branches split
let rotation = (Math.PI * 2) / sides;

//draw branch loop
function drawBranch(level) {
  if (level > maxLevel) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size, 0);
  ctx.stroke();

  for (let i = 0; i < branches; i++) {
    ctx.save();
    ctx.translate(size - (size / branches) * i, 0);
    ctx.scale(scale, scale);

    ctx.save();
    ctx.rotate(spread);
    drawBranch(level + 1);
    ctx.restore();

    ctx.save();
    ctx.rotate(-spread);
    drawBranch(level + 1);
    ctx.restore();

    ctx.restore();
  }
}

function drawFractal() {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.translate(canvas.width / 2, canvas.height / 2);

  for (let i = 0; i < sides; i++) {
    ctx.rotate(rotation);
    drawBranch(0);
  }
  ctx.rotate(5);
  ctx.restore();
}

window.addEventListener("load", function () {
  drawFractal();
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  size = Math.min(canvas.width / 15, canvas.height / 15);
  drawFractal();
});

window.addEventListener("scroll", function () {});
