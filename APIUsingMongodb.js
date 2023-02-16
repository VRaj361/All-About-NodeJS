const express = require("express")
const app = express();
const dbConnect = require("./MongodbConnectionAll")
const mongodb = require("mongodb")
app.use(express.json())

app.get("/users",async(req,res)=>{
    let data = await dbConnect();
    data =await data.find().toArray();
    res.send(data)
})

app.post("/user",async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result)
})

app.put("/user/:name",async(req,res)=>{
    let data = await dbConnect();
    let result  = await data.updateOne(
        // {name:req.body.name},
        {name:req.params.name},
        {$set:req.body}
    )
    res.send(result)
    // res.send("successfully updated")
})

app.delete("/user/:id",async(req,res)=>{
    let data = await dbConnect();
    let result  = await data.deleteOne(
        // {name:req.body.name},
        {_id:new mongodb.ObjectId(req.params.id)}
    )
    result["id"]=req.params.id
    res.send(result)
})
app.listen(5000)