'use strict';

// const {UserException} = require('./Exception/userException');

// Принцип единственной обязанности / ответственности (single responsibility principle / SRP)

//bad

class NewsBad {
	constructor(title,text){
		this.title = title;
		this.text = text;
		this.data = 'currentdate';
		this.dataUpdateNews = [];		
	}
	udate(text){
		this.text = text;
		this.dataUpdateNews = [];
	}

	totHTML(){
		return `<div>News</div>
				<div>Title: ${this.text}</div>
				<div>Text:${this.text}</div>`;
	}

	toJson(){
		return JSON.stringify({title:this.title, text: this.title});
	}

	toEmail(){
		return {title:this.title, text: this.title};
	}
}

//God

class News {
	constructor(title, text){
		this.title = title;
		this.text = text;
		this.data = 'currentdate';
		this.dataUpdateNews = [];
	}
	update(text){
		this.text = text;
		this.dataUpdateNews = [];
	}
}

class FormatContext{
	constructor(news = new News()){
		this.news = news;
	}
	toHTML(){
		return `<div>News</div>
				<div>Title: ${this.text}</div>
				<div>Text:${this.text}</div>`;
	}

	toJson(){
		return JSON.stringify({title:this.news.title, text: this.news.title});
	}

	toEmail(){
		return {title:this.news.title, text: this.news.title};
	}

}


module.exports = { NewsBad ,News, FormatContext };