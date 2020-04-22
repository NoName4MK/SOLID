/* eslint-disable no-undef */
'use strict';
const  {Circle, Point, Line} = require('../../modules/InterfaceSegregation');


const point1 = new Point(10,10);

test('draw Point',()=>{
	const data = point1.draw();
	expect(data).toBe('draw point');
});

test('draw Line',()=>{
	const line = new Line(new Point(1,1), new Point(2,5));
	const data = line.draw();
	expect(data).toBe('draw line');
});

test('draw Circle',()=>{
	const circle = new Circle(point1,12);
	const data = circle.draw();
	expect(data).toBe('draw circle');
});

test('area Circle',()=>{
	const circle = new Circle(point1,12);
	const data = circle.area();
	expect(data).toBe(Math.PI*Math.sqrt(12));
});

