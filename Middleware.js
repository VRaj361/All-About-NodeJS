const express = require("express")
const homefilter = require("./AllMiddleware")
const app = express();
const filter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter your age")
    }else if(req.query.age<18){
        res.send("You are underage")
    }else{
        next();
    }
}
// app.use(filter)// for all routes
app.get("",homefilter.filterforhome,(req,res)=>{
    res.send("Welcome to home")
})

app.get("/user",filter,(req,res)=>{
    res.send("Welcome to user page")
})

//apply filter in group of route
const route = express.Router()
route.use(homefilter.filterforgroup)
route.get("/contact",(_,res)=>{
    res.send("You are on contact page")
})
route.get("/about",(_,res)=>{
    res.send("You are on about page")
})
app.use('/',route)


app.listen(5000)