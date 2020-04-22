'use strict';

const {UserException} = require('./Exception/userException');

// Принцип открытости / закрытости (open-closed principle / OCP)



class ShapeArea {
	draw() {
		return new UserException('Not create method');
	}

	area() {
		return new UserException('Not create method');
	}
}


class Circle extends ShapeArea {
	constructor(radius = 0){
		super();
		this.radius = radius;
	}

	area(){
		return Math.PI*Math.sqrt(this.radius);
	}
}

class Square extends ShapeArea {
	constructor(size = 0){
		super();
		this.size = size;
	}

	area(){
		return Math.sqrt(this.size);
	}
}

class AreaCalc {
	constructor(shape=[]){
		this.shape=shape;
	}
	sum(){
		return this.shape.reduce((acc, current) => { return acc += current.area(); }, 0);
	}
}

module.exports = { Circle, Square, AreaCalc };