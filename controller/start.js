'use strict';
// import obj from '../modules/solid';
const { Database, FetchClietn } = require('../modules/DependencyInversion');
const { Circle } = require('../modules/InterfaceSegregation');

(async () => {
	const db =  new Database( new FetchClietn);
	console.log(await db.getDate());
	// return await db.getDate();
})();

const circle = new Circle(...[2,2,4]);
console.log(circle.draw());



