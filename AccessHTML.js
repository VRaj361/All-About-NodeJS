const express = require("express")
const path = require('path')
const app = express()
const publicFoldPath = path.join(__dirname,"public")
console.log(publicFoldPath)
app.use(express.static(publicFoldPath))//load direct html page with using url

app.get("/about",(req,res)=>{
    res.sendFile(`${publicFoldPath}/about.html`)
})

app.get("*",(_,res)=>{
    res.sendFile(`${publicFoldPath}/error.html`)
})

app.listen(5000)

