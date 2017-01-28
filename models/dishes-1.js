//grab the things we need
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//create a schema
var dishSchema=new Schema({
	name: {
		type: String,
		required: true,
		unique: true
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
var Dishes=mongoose.model('Dish', dishSchema);

//make this available in node application
module.exports=Dishes;