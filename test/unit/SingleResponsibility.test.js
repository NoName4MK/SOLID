/* eslint-disable no-undef */
'use strict';
const  {NewsBad, News, FormatContext} = require('../../modules/SingleResponsibility');

function toJson (news){
	return JSON.stringify({title:news.title, text: news.title});
}

test('Get Json format for NewsBad',()=>{
	const newsB = new NewsBad('News1','Some text for news');
	const data = newsB.toJson();
	const reult = toJson(newsB);
	expect(data).toBe(reult);
});


test('Get Json format for News',()=>{
	const news = new News('News1','Some text for news');
	const format = new FormatContext(news);
	const data = format.toJson();
	const reult = toJson(news);
	expect(data).toEqual(reult);
});



