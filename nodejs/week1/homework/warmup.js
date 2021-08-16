console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() { return this.radius * 2 }
    getCircumference() { return Number(this.getDiameter() * Math.PI).toFixed(2) }
    getArea() { return Number(Math.PI * Math.pow(this.radius, 2)).toFixed(2) }
}

const circle1 = new Circle(10);
const circle2 = new Circle(5);
const circle3 = new Circle(12);

console.log("Circle 1:", `diameter=${circle1.getDiameter()}, circumference=${circle1.getCircumference()}, area=${circle1.getArea()}`);
console.log("Circle 2:", `diameter=${circle2.getDiameter()}, circumference=${circle2.getCircumference()}, area=${circle2.getArea()}`);
console.log("Circle 3:", `diameter=${circle3.getDiameter()}, circumference=${circle3.getCircumference()}, area=${circle3.getArea()}`);