const mongoose=require('mongoose');

const itemSchema=mongoose.Schema({
    itemName:{
        type:String,
        required:['true',"Please add an item"]
    },
    itemPrice:{
        type:Number
    }
})
const Item=mongoose.model('Item',itemSchema)
module.exports={Item}