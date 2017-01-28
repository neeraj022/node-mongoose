var mongoose=require('mongoose');
//var assert=require('assert');

var Dishes=require('./models/dishes-3');

//connection URL
var url="mongodb://localhost:27017/confusion";
mongoose.connect(url);
var db=mongoose.connection;

//two scenarios
db.on('error', console.error.bind(console, ' connection error: '));

db.once('open', function(){
	console.log('Connected to server');

	//create a new dish
	Dishes.create({
		name: 'kheer',
		description: 'hot',
		comments: [{
			rating: 3,
			comment: 'I have been there, good exprience',
			author: 'subhash'
		}]
	}, function(err, dish){
		if(err) throw err;
		console.log('Dish created');
		console.log(dish);
		var id=dish._id;
		setTimeout(function(){
			Dishes.findByIdAndUpdate(id, {
				$set: {
					description: 'Updated Hot'
				}
			}, {
				new: true
			}).exec(function(err, dish){
				if (err) throw err;
				console.log('Dish has been updated');
				console.log(dish);

				dish.comments.push({
					rating: 5,
					comment: 'nice shot',
					author: 'hero'
				});
				console.log('comment updated');
				console.log(dish);

				db.collection('dishes').drop(function()
					{
						db.close();
						console.log('collection has been dropped and conneciton is closed');
					});
			});
		}, 3000);
	});
});