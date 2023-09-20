const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//canvas settings

ctx.lineWidth = 5;
ctx.lineCap = "round";

//hexagon class
class Hexagon {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = Math.random() * 0.5 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 25, this.y);
    ctx.lineTo(this.x + 35, this.y + 20);
    ctx.lineTo(this.x + 25, this.y + 40);
    ctx.lineTo(this.x, this.y + 40);
    ctx.lineTo(this.x - 10, this.y + 20);
    ctx.lineTo(this.x, this.y);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

//square class
class Square {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = Math.random() * 0.5 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
//triangle class
class Triangle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = Math.random() * 0.5 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 50, this.y);
    ctx.lineTo(this.x + 25, this.y + 50);
    ctx.lineTo(this.x, this.y);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const square_1 = new Square(
  Math.random() * canvas.width,
  0,
  50,
  50,
  "rgb(160, 29, 62)"
);
const triangle_1 = new Triangle(
  Math.random() * canvas.width,
  0,
  "rgb(20, 47, 144)"
);
const hexagon_1 = new Hexagon(
  Math.random() * canvas.width,
  0,
  "rgb(214, 239, 47)"
);

const square_2 = new Square(
  Math.random() * canvas.width,
  0,
  50,
  50,
  "rgb(160, 29, 62)"
);
const triangle_2 = new Triangle(
  Math.random() * canvas.width,
  0,
  "rgb(20, 47, 144)"
);
const hexagon_2 = new Hexagon(
  Math.random() * canvas.width,
  0,
  "rgb(214, 239, 47)"
);

const shapes = [
  square_1,
  square_2,
  triangle_1,
  triangle_2,
  hexagon_1,
  hexagon_2,
];

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i].y > canvas.height) {
      shapes[i].y = 0;
      shapes[i].x = Math.random() * canvas.width;
      shapes[i].speed = Math.random() * 0.5 + 0.2;
      shapes[i].color = randomColor();
    }
    shapes[i].y += shapes[i].speed;
    shapes[i].draw();
  }
  requestAnimationFrame(update);
}

window.addEventListener("load", function () {});
window.requestAnimationFrame(update);
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  color = "#f123f2";
  window.cancelAnimationFrame();
  window.requestAnimationFrame(update);
});
