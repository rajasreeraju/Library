const express=require('express');
const booksRouter=express.Router();
const bookData=require('../model/bookData');
function route(nav){
    booksRouter.route('/')
        .get((req,res)=>{
            bookData.find()
            .then(function(books){
                res.render('books',{books,nav,title:"Books"});
            });

        });

    booksRouter.route('/:id')
        .get((req,res)=>{
            const id=req.params.id;
            bookData.findOne({_id:id})
            .then(function(book){
                res.render('book',{nav,title:"Library",book});

        });
    });
    return booksRouter;
    
}
module.exports=route;