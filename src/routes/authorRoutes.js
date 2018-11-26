const express=require('express');
const authorRouter=express.Router();
const authorData=require('../model/authorData');
function route(nav){
    authorRouter.route('/')
        .get((req,res)=>{
            authorData.find()
            .then(function(author){
        res.render("authors",{author,nav,title:"Author"});
    });
    authorRouter.route('/:id')
        .get((req,res)=>{
            const id=req.params.id;
            authorData.findOne({_id:id})
        .then(function(author){
            res.render('author',{nav,title:"Library",author});

    });


    });
  });
  return authorRouter;
}
module.exports=route;