var express=require("express");
var router=express.Router();
//
router.get("/aboutUs",function(req,res){
    res.render("aboutUs",{});
})
router.post("/aboutUs",function(req,res){
    //do something with the message
    var data=req.body;
})
//catch all must be LAST
router.get("*",function(req,res){
    res.render("index",{});
})
//catch all must be LAST
module.exports=router;