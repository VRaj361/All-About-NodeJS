exports.filterforhome = (req,res,next)=>{
    if(!req.query.userid){
        res.send("Please Login first")
    }else {
        next();
    }
}

exports.filterforgroup = (req,res,next)=>{
    if(!req.query.ca){
        res.send("Please provide some valid information")
    }else {
        next();
    }
}