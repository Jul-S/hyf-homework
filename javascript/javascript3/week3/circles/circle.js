const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

class Circle {
    constructor(x, y, radius, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        context.fillStyle = this.fillColor;
        context.lineWidth = 1;
        context.fill();
        context.stroke();
    }
}

setInterval(renderCircles, 100);

window.addEventListener("mousemove", updateCoordinates)

function updateCoordinates(event) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
}

let mouseX = 0;
let mouseY = 0;

function renderCircles() {
    const randomX = mouseX;
    const randomY = mouseY;
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const c1 = new Circle(randomX, randomY, 20, 0, 2 * Math.PI, randomColor);
    c1.draw();
}