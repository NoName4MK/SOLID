'use strict';

// const {UserException} = require('./Exception/userException');

// Принцип подстановки Барбары Лисков (Liskov substitution principle / LSP)

class Human {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}

class Employee {
	constructor(human, position , amount ){
		this.human = human;	
		this.position = position;
		this.amount = amount;
	}
	work(){
		this.position.currentWork();
	}

}

class Company {
	
	constructor(name){
		this.name = name;
		this.employees=[];
		this.human=[];
	}
	addEmployee(employee){
		this.employees.push(employee);
	}
	work(){
		this.employees.map(el=>{
			if(this.human.find(item=>item==el.human)){
				el.work();
			}
		});
	}
	cameToCompany(human){
		if(!this.human.includes(human)){
			this.human.push(human);		
		}
	}
	leftTheCompany(human){
		this.human=this.human.filter(item=>item!=human);		
	}
	whoGuest(){
		this.human.map(human=>{
			let find = false;
			if(this.employees.find(item=>item.human==human)){
				find = true;
			}
			if(!find){
				console.log(`Guest ${human.name}`);
			}
		});
	}

}

class Position {
	currentWork(){

	}
	access(){

	}
}

class Beck extends Position{

	currentWork(){
		console.log('create Beck');
	}
	access(){
		return true;
	}
}
class Front extends Position{

	currentWork(){
		console.log('create Front');
	}
	access(){
		return true;
	}
}

const Peta = new Human('Peta',30);
const Vasa = new Human('Vasa',35);
const Nikitos = new Human('Nikitos',45);


const companyDeveloper = new Company('Developer');
// const beck = new Beck();
// const front = new Front();
companyDeveloper.addEmployee(new Employee(Peta,new Beck(),200));
companyDeveloper.addEmployee(new Employee(Vasa,new Front(),300));

companyDeveloper.cameToCompany(Peta);
companyDeveloper.cameToCompany(Vasa);
companyDeveloper.cameToCompany(Nikitos);
companyDeveloper.work();
companyDeveloper.whoGuest();
console.log('--------');
companyDeveloper.leftTheCompany(Peta);
companyDeveloper.work();

console.log(companyDeveloper);