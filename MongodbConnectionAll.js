const {MongoClient} = require("mongodb")
const url = "mongodb://127.0.0.1:27017"
const database = "nodejsbasic"
const client = new MongoClient(url)


async function dbConnection(){
    let result =await client.connect();
    let db = result.db(database);
    let collection = db.collection("basic");
    return collection;
}

module.exports = dbConnection;