import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Accounts } from 'meteor/accounts-base';
import { chai, expect } from 'meteor/practicalmeteor:chai';

console.log("Creando metodos en modo de prueba")
Meteor.methods({
	'test.resetDatabase': () => resetDatabase(),
	'test.createUser':()=>{
		Accounts.createUser({
			username: 'demo',
			email: 'demo@demo.com',
			password: 'demopassword',
		});
	},
});

describe('Crear usuario',function()
{
// Test de creación de usuarios
it('Se puede crear un usuario',  function() {
	const createUser = new Promise((resolve, reject) => {
		var result=Accounts.createUser({
			username: 'demo',
			email: 'demo@demo.com',
			password: 'demopassword',
		});

		if (result)
		{
			const newUser = Meteor.users.findOne();
			resolve(newUser);
		}
		else
		{
			reject("NO CREO");
		}


	});
	return createUser.then(function (newUser) {
		expect(newUser).to.not.be.undefined;
		expect(newUser.username).to.equal('demo');
	});
});
