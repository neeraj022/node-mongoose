var mongoose=require('mongoose');
//var assert=require('assert');

var Dishes=require('./models/dishes-1');

//connection URL
var url="mongodb://localhost:27017/confusion";
mongoose.connect(url);
var db=mongoose.connection;

//two scenarios
db.on('error', console.error.bind(console, ' connection error: '));
db.once('open', function(){
	console.log('Connected to server');

	//create a new dish
	var newDish=Dishes({
		name: 'gulab jamun',
		description: 'hot and delicious'
	});

	newDish.save(function(err)
		{
			if(err) throw err;

			console.log('Dish created');
		
	Dishes.find({}, function(err, dishes)
		{
			if(err) throw err;
			console.log(dishes);

			db.collection('dishes').drop(function()
				{
					db.close();
					console.log('Connection closed and collection dropped');
				});
		});
	});
});