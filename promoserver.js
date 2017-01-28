var mongoose=require('mongoose');
//var assert=require('assert');

var Promotions=require('./models/promotion');

//connection URL
var url="mongodb://localhost:27017/confusion";
mongoose.connect(url);
var db=mongoose.connection;

//two scenarios
db.on('error', console.error.bind(console, ' connection error: '));

db.once('open', function(){
	console.log('Connected to server');

	//create a new promotion
	Promotions.create({
		name: 'jugnoo breakfast',
		image: 'images/hero',
		price: '6.99',
		description: 'hot'
	}, function(err, promotion){
		if(err) throw err;
		console.log('Promotion created');
		console.log(promotion);
		var id=promotion._id;
		setTimeout(function(){
			Promotions.findByIdAndUpdate(id, {
				$set: {
					description: 'Updated Hot'
				}
			}, {
				new: true
			}).exec(function(err, promotion){
				if (err) throw err;
				console.log('Promotion has been updated');
				console.log(promotion);


				db.collection('promotions').drop(function()
					{
						db.close();
						console.log('collection has been dropped and conneciton is closed');
					});
			});
		}, 3000);
	});
});