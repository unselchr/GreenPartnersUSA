var express=require("express");
var app=express();
var PORT=process.env.PORT || 3000;
//
var routes=require("./data/routes/routes.js");
//Host
app.listen(PORT,function(){
    console.log("Server listening on port: "+PORT);
})