/* eslint-disable no-undef */
'use strict';
const  { Circle, Square, AreaCalc } = require('../../modules/OpenClosed');


test('Get summ for AreaCalc',()=>{
	const circle = new Circle(10);
	const square = new Square(10);
	const calc = new AreaCalc([circle,square]);
	const data = calc.sum();
	const result = circle.area()+square.area();
	expect(data).toEqual(result);
});




