const express = require("express")
const app = express()
const EventEmitter = require("events")


const ev = new EventEmitter();
ev.on("countNum",()=>{
    console.log("fjdsb")
})
app.get("/",(_,res)=>{
    res.send("fsdah")
    ev.emit("countNum")
})
app.listen(5000)
