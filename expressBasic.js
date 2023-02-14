const express = require("express")
const app = express()

app.get("",(req,res)=>{
    res.send(`Home page<br>
    <input type='text' value=${req.query.name!=undefined?req.query.name:'Username'} placeholder='Username'></input>
    `)
    
})

app.get("/about",(req,res)=>{
    res.send(`about page<br>
            <a href='/'>Home</a>
    `)
})

app.get("/data",(req,res)=>{
    res.send("hello "+req.query.name);
})

app.listen(5000);
