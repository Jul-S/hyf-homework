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
        context.fill();
        context.stroke();
    }
}

setInterval(renderCircles, 100);

function renderCircles() {
    const randomX = Math.floor(Math.random() * canvas.clientWidth);
    const randomY = Math.floor(Math.random() * canvas.clientHeight);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
    c1.draw();
}