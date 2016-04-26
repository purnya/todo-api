var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	/*'storage':'basic-sqlite-database.sqlite'*/
	'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING
	},
	completed: {
		type: Sequelize.BOOLEAN
	}
})


/*sequelize.sync().then(function () {
	console.log('Everything is synced');
	
});*/

// force - true : it will automatic drop all tables in database and recreate it
// force - false : it will create it if not exists

sequelize.sync({force: true}).then(function () {
	console.log('Everything is synced');

   // creat new todo 
	Todo.create({
		description: 'Walking my dog',
		completed: false
	}).then(function (todo) {
		console.log('Finished!');
		console.log(todo);
	});
});