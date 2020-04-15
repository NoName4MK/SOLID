'use strict';
// Принцип инверсии зависимостей (dependency inversion principle / DIP) 

const {UserException} = require('./Exception/userException');

class Fetch {
	request(url) {
		return Promise.resolve(`data from fetch ${url}`);
	}
}

class LocalStorage {
	get() {
		return Promise.resolve('data from get');
	}
}

class Store {
	getDate() {
		throw new UserException('Not create method');
	}
}

class FetchClietn extends Store {
	constructor() {
		super();
		this.class = new Fetch();
	}
	getDate() {
		return this.class.request('vk.com');
	}
}

class LocalStorageClietn extends Store {
	constructor() {
		super();
		this.class = new LocalStorage();
	}
	getDate() {
		return this.class.get();
	}
}

class Database {
	constructor(client = new Store()) {
		this.client = client;
	}
	getDate() {
		return this.client.getDate();
	}
}

// export default{Database,LocalStorageClietn,FetchClietn}
module.exports = { Database, LocalStorageClietn, FetchClietn };
