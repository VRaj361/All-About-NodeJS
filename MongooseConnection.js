const mongoose = require("mongoose")
mongoose.set("strictQuery",true)
mongoose.connect("mongodb://127.0.0.1:27017/nodejsbasic")
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    })
const main = async()=>{
    
    const ProductModel = mongoose.model('basic',ProductSchema);//s bydefault add at the end
    let data = new ProductModel({name:"Patel",price:3434})
    let result = await data.save();
    console.log(result)
}
// main()

const User = mongoose.model('basics',ProductSchema)
const findAll = async()=>{
    
    let data = await User.find();
    console.log(data)
}
// findAll()

const updateOneRecord = async()=>{
    
    let data = await User.updateOne(
        {name:"Patel"},
        {$set:{price:34}}
    )
    
}
// updateOneRecord()

const deleteRecord = async()=>{
    let data  = await User.deleteOne({price:34})

}
deleteRecord()