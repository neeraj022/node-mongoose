//grab the things we need
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//create a comments schema
var commentSchema=new Schema({
	rating: {
		type: Number,
		max: 5,
		min: 1,
		required: true
	}, 
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
}, 
	{
		timestamps: true
	});


//create a dish schema
var dishSchema=new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	comments: [commentSchema]
},
	{
		timestamps: true
	}
);


//creating a model using the schema
var Dishes=mongoose.model('Dish', dishSchema);

//make this available in node application
module.exports=Dishes;