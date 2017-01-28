//grab the things we need
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


//create a promotion schema
var leaderSchema=new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String,
		required: true
	},
	designation: {
		type: String,
		required: true
	},
	abbr: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
},
	{
		timestamps: true
	}
);


//creating a model using the schema
var Leaders=mongoose.model('Leader', leaderSchema);

//make this available in node application
module.exports=Leaders;