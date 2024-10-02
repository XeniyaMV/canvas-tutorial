const canvasW = 500;
const canvasH = 300;

const canvas = document.querySelector('canvas');
canvas.width = canvasW;
canvas.height = canvasH;

const context = canvas.getContext('2d');
const mouse = {
  x: null,
  y: null,
};

class Circle {
  constructor(x, y, dx, dy, radius, strokeColor, fillColor) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.currentRadius = radius;
    this.strokeColor = strokeColor || '000000';
    this.fillColor = fillColor || 'ffffff';
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.currentRadius, 0, 2 * Math.PI, true);
    context.strokeStyle = this.strokeColor;
    context.fillStyle = this.fillColor;
    context.stroke();
    context.fill();
  }

  updateCoordinates() {
    if (this.x + this.dx + this.currentRadius > canvasW || this.x + this.dx - this.currentRadius < 0)  this.dx = -this.dx;
    if (this.y + this.dy + this.currentRadius > canvasH || this.y + this.dy - this.currentRadius < 0)  this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    if (mouse.x !== null && mouse.y !== null && Math.abs(mouse.x - this.x) < 40 && Math.abs(mouse.y - this.y < 40)) {
      if (this.currentRadius < 50) this.currentRadius += 1;
    } else if (this.currentRadius > this.radius) {
      this.currentRadius -= 1;
    }
  }
}

const circles = [];
for (let i = 0; i < 100; i++) {
  const radius = Math.floor(5 + Math.random() * 25);
  const randomX = Math.random() * canvasW;
  const randomY = Math.random() * canvasH;
  const xDirection = Math.round(Math.random()) > 0 ? 1 : -1;
  const yDirection = Math.round(Math.random()) > 0 ? 1 : -1;
  const dx = xDirection * Math.floor(1 + Math.random() * 1);
  const dy = yDirection * Math.floor(1 + Math.random() * 1);
  const fillColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`;
  let x = randomX;
  let y = randomY;
  
  if (x <= radius) x += radius;
  if (x >= (canvasW - radius)) x -= radius;
  if (y <= radius) y += radius;
  if (y >= (canvasH - radius)) y -= radius;
  const circle = new Circle(x, y, dx, dy, radius, null , fillColor);
  circles.push(circle);
}


function animation() {
  context.clearRect(0, 0, canvasW, canvasH);
  circles.forEach((circle) => {
    circle.draw();
    circle.updateCoordinates();
  });

  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);


canvas.addEventListener('mousemove', (event) => {
  const canvasX = canvas.offsetLeft;
  const canvasY =  canvas.offsetTop;
  mouse.x = event.x - canvasX;
  mouse.y = event.y - canvasY;
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});