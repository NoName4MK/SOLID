'use strict';

class UserException{
	constructor(message) {
		this.message = message;
		this.name = 'Исключение, определенное пользователем';
	}
}

module.exports = {UserException};
