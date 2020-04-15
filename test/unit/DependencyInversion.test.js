/* eslint-disable no-undef */
'use strict';
const  {Database, LocalStorageClietn, FetchClietn} = require('../../modules/DependencyInversion');


test('Create FetchClietn', async () => {
	const db = new Database(new FetchClietn());
	const data = await db.getDate();
	expect(data).toBe('data from fetch vk.com');
});

test('Create LocalStClietn', async () => {
	const db = new Database(new LocalStorageClietn());
	const data = await db.getDate();
	expect(data).toBe('data from get');
});

test('toThrow Database', () => {
	const db = new Database();
	expect(db.getDate).toThrow();
});

