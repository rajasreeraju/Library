const express=require('express');
const addauthorRouter=express.Router();
const authorData=require("../model/authorData");
function route(nav){
    addauthorRouter.route('/')
    .get((req,res)=>{
        res.render("addauthorRoutes",{nav,title:"Add Author"});
    });
    addauthorRouter.route('/add')
    .get((req,res)=>{
        var item={bookname:req.param("bookname"),
        author:req.param("author")
        }
        var author=new authorData(item);
        author.save();
        res.redirect('/authors');
    });
    return addauthorRouter;
}
module.exports=route;