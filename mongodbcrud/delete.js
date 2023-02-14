const dbConnect = require("../MongodbConnectionAll")

async function delet(){
    let data = await dbConnect()
    let result = await data.deleteOne({name:"nick"})
    console.log(result)
    if(result.acknowledged){
        console.log("record deleted")
    }
}
delet()