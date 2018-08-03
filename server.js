var express=require("express");

var app=express();

app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.send("hello express");
});

app.listen(3000,()=>{
    console.log(`Server is up on 3000`);
});