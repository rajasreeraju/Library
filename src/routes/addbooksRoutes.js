const express=require('express');
const addbooksRouter=express.Router();
function route(nav){
    addbooksRouter.route('/')
    .get((req,res)=>{
        res.render("addbooks",{nav,title:"Add Book"});
    });
    return addbooksRouter;
}
module.exports=route;