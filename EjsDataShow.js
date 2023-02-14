const express = require("express")
const app = express()

app.set("view engine","ejs")
app.get("/profile",(req,res)=>{
    let user = {
        "name":"vraj",
        "email":"vraj@gmail.com",
        "contact":4354,
        "skills":["c++","java","python","nodejs"]
    }
    res.render("profile",{user})
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.listen(5000)