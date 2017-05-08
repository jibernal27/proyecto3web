import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Accounts } from 'meteor/accounts-base';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import { random } from "meteor/random";

if(Meteor.isServer){
console.log("Creando metodos en modo de prueba")
Meteor.methods({
	'test.resetDatabase': () => resetDatabase(),
	'test.createUser':()=>{
		var usuario1 = {
			username: '',
			email: '',
			password: 'demoTestpassword',
		};
		usuario1[username] = random.id+"";
		usuario1[email] = random.id+"@test.com";
		Accounts.createUser(usuario1);
	},
});

describe('Crear usuario',function()
{
// Test de creación de usuarios
it('No se puede crear un usuario',  function() {
	const createUser = new Promise((resolve, reject) => {
		var usuario1 = {
			username: '',
			email: '',
			password: 'demoTestpassword',
		};
		usuario1[username] = random.id+"";
		usuario1[email] = random.id+"@test.com";
		Accounts.createUser(usuario1);

		var result=Accounts.createUser(usuario1);

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
});

});
}
