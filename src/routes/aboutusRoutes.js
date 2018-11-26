const express=require('express');
const aboutusRouter=express.Router();

function route(nav){
    var aboutus={name:"Central Library",Place:"Kannur",Since:"1995"}
    aboutusRouter.route('/')
    .get((req,res)=>{
        res.render("aboutus",{aboutus,nav,title:"Aboutus"});
    });
    return aboutusRouter;
}
module.exports=route;