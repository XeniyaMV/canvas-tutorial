const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

// *** Rectangular
// context.fillRect(x, y, width, height);
context.fillStyle = 'rgba(255, 0, 0, 0.5)';
context.fillRect(100, 100, 100, 100);
context.fillStyle = 'rgba(0, 255, 0, 0.5)';
context.fillRect(100, 300, 100, 100);
context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(300, 100, 100, 100);

// *** Line
context.beginPath();
// context.moveTo(x, y); -start point
// context.lineTo(x, y); -end point
context.moveTo(100, 300); //line will be invisible till stroke method is called
context.lineTo(100, 50);
context.lineTo(200, 50);
context.lineTo(200, 100);
// color to line
context.strokeStyle = 'red';
context.stroke();

// *** Arc / Circle
// context.arc(x, y, radius, startAngle, endAngle, drawCounterClockwise);
// begin a new path, to prevent a connection between previous line

// context.beginPath(); 
// context.arc(210, 150, 10, 0, 2 * Math.PI, true);
// context.strokeStyle = 'blue';
// context.stroke();

for (let i = 0; i < 10; i++) {
  context.beginPath();
  context.arc(210 + i * 9, 150, 10, 0, 2 * Math.PI, true);
  context.strokeStyle = 'blue';
  context.stroke();
}

