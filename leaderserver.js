var mongoose=require('mongoose');
//var assert=require('assert');

var Leaders=require('./models/leader');

//connection URL
var url="mongodb://localhost:27017/confusion";
mongoose.connect(url);
var db=mongoose.connection;

//two scenarios
db.on('error', console.error.bind(console, ' connection error: '));

db.once('open', function(){
	console.log('Connected to server');

	//create a new leader
	Leaders.create({
		name: 'mahatama gandhi',
		image: 'image/hero.png',
		designation: 'CEO leader',
		abbr: 'CEO',
		description: 'smart and young'
	}, function(err, leader){
		if(err) throw err;
		console.log('Leader created');
		console.log(leader);
		var id=leader._id;
		setTimeout(function(){
			Leaders.findByIdAndUpdate(id, {
				$set: {
					description: 'Updated smart and young'
				}
			}, {
				new: true
			}).exec(function(err, leader){
				if (err) throw err;
				console.log('Leader has been updated');
				console.log(leader);

				db.collection('leaders').drop(function()
					{
						db.close();
						console.log('collection has been dropped and conneciton is closed');
					});
			});
		}, 3000);
	});
});