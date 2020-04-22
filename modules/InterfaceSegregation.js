'use strict';

const {UserException} = require('./Exception/userException');

// Принцип разделения интерфейса (interface segregation principle / ISP)


class Shape {
	draw() {
		return new UserException('Not create method');
	}
}

class ShapeAera extends Shape{
	
	area() {
		return new UserException('Not create method');
	}
}

class Point extends Shape {
	constructor(x = 0, y = 0){
		super();
		this.x = x;
		this.y = y;
	}
	draw(){
		return 'draw point';
	}
}

class Line extends Shape {
	constructor(point1 = new Point(), point2 = new Point()){
		super();
		this.point1 = point1;
		this.point2 = point2;
	}
	draw(){
		return 'draw line';
	}
}

class Circle extends ShapeAera {
	constructor(point = new Point(), radius = 0){
		super();
		this.point = point;
		this.radius = radius;
	}

	draw(){
		return 'draw circle';
	}

	area(){
		return Math.PI*Math.sqrt(this.radius);
	}
}

module.exports = { Circle, Line , Point };