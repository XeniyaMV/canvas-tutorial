const canvasW = 500;
const canvasH = 300;

const canvas = document.querySelector('canvas');
canvas.width = canvasW;
canvas.height = canvasH;

const context = canvas.getContext('2d');

let dx = 5;
let dy = 5;
const r = 10;
const startPoint = {x: r, y: r};
function animation() {
  context.clearRect(0, 0, canvasW, canvasH);
  context.beginPath();
  context.arc(startPoint.x, startPoint.y, r, 0, 2 * Math.PI, true);
  context.strokeStyle = 'blue';
  context.stroke();
  
  if (startPoint.x + dx + r > canvasW || startPoint.x + dx - r < 0)  dx = -dx;
  if (startPoint.y + dy + r> canvasH || startPoint.y + dy - r < 0)  dy = -dy;

  startPoint.x += dx;
  startPoint.y += dy;
  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);
// cancelAnimationFrame(id);

