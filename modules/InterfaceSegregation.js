'use strict';

const {UserException} = require('./Exception/userException');

// Принцип разделения интерфейса (interface segregation principle / ISP)

class Shape {
	draw() {
		return new UserException('Not create method');
	}

	area() {
		return new UserException('Not create method');
	}
}


class Circle extends Shape {
	constructor(x = 0, y = 0, radius = 0){
		super();
		this.x = x;
		this.y = y;
		this.radius = radius;
	}

	draw(){
		return 'draw circle';
		// return `draw circle x = ${this.x} y=${this.y} radius=${this.radius}`;
	}
}

module.exports = { Circle };