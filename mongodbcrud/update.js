const dbConnect = require("../MongodbConnectionAll")
async function update(){
    let data = await dbConnect()
    const result = await data.updateOne(
        {name:"Vraj"},{$set: {password:"fdsjkaalsdkjf"}}
    )
    console.log(result)
}
update()
