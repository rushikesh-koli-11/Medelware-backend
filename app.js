const express = require("express");
const app=express();

//logger
// app.use((req,res,next)=>{
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     next();
// })

// app.use( (req,res,next)=>{
//     console.log("i am middleware");
//     next();
// } );

app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
});

app.get("/api",(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("hi i am root");
})

app.get("/random",(req,res)=>{
    res.send("this is random page");
})


//404
app.use((req,res)=>{
    res.send("page not found");
});

app.listen(8080,()=>{
    console.log("server is lisiting at port 8080")
})