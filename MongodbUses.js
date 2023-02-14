const dbConnect = require("./MongodbConnectionAll")

dbConnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data)
    })
})

