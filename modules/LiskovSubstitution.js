'use strict';

const {UserException} = require('./Exception/userException');

// Принцип подстановки Барбары Лисков (Liskov substitution principle / LSP)

class Human {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

class Worker extends Human {
	constructor(name, age, company){
		super(name, age);	
		this.company = company;	
	}
	work(){
		this.working = true;
		console.log('this.working - ', this.working);
	}
	rest(){
		this.working = false;
		console.log('this.working - ', this.working);
	}

}

// class Beck extends Worker(){

// }

module.exports = { Worker, UserException };