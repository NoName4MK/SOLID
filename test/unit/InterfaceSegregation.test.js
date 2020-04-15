/* eslint-disable no-undef */
'use strict';
const  {Circle} = require('../../modules/InterfaceSegregation');

test('draw Circle',()=>{
	const paramCircle = [1,1,2];
	const circle = new Circle(...paramCircle);
	const data = circle.draw();
	expect(data).toBe('draw circle');
});