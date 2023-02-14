let a = 20;
let b = 10;

const waitingData = new Promise((res,rej)=>{
    setTimeout(() => {
        res(40);
    }, 2000);
})

waitingData.then((data)=>{
    console.log(a+data)
})

console.log("import value-->"+require("./httpbasic").a)