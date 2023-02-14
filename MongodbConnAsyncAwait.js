const {MongoClient} = require("mongodb")
const url = 'mongodb://127.0.0.1:27017'//localhost is not working
const database = 'nodejsbasic'
const client = new MongoClient(url)

async function getData(){
    let result = await client.connect();//database connect
    let db = result.db(database);
    let collection = db.collection("basic")
    let response = await collection.find({}).toArray();//return promise that's why use await
    console.log(response)
}
getData()

