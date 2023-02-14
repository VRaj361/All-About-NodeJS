const dbConnect = require("../MongodbConnectionAll")
const insert = async()=>{
    const db = await dbConnect();

    const result = await db.insertMany([{
        "name":"nick",
        "password":"dasf"
    },{
        "name":"alamin",
        "password":"dasffdas"    
    }])
    if(result.acknowledged){
        console.log("Data inserted")
    }
}
insert()