var express=require("express");
var app=express();
var PORT=process.env.PORT || 3000;
var exphbs=require("express-handlebars");
var bodyParser=require("body-parser");
//
var routes=require("./data/routes/routes.js");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
app.use(express.static("public"));
app.use(routes);
//Host
app.listen(PORT,function(){
    console.log("Server listening on port: "+PORT);
})