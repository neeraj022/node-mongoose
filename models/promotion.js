//grab the things we need
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


//create a promotion schema
var promotionSchema=new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String,
		required: true
	},
	label: {
		type: String,
		default: ""
	},
	price: {
		type: Currency,
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
var Promotions=mongoose.model('Promotion', promotionSchema);

//make this available in node application
module.exports=Promotions;