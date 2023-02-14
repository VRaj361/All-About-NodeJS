const http = require("http")
http.createServer((req,res)=>{
    res.write("hellllo")
    res.end()
}).listen(4000)

exports.a =10; 