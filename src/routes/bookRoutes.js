const express=require('express');
const booksRouter=express.Router();
function route(nav){
    var books=[{title:"God Of Small Things",author:"Arundhathi Roy",type:"Debut Novel"},
        {title:"Your Dreams Are Mine Now",author:"Ravinder Singh",type:"Love Story"},
        {title:"MyStrory",author:"Kamala Das",type:"Auto biograpy"},
        {title:"Half Girlfriend",author:"Chethan Bhagath",type:"Love Story"},
        {title:"Harry Potter",author:"G K Rowling",type:"Fiction"}]
    booksRouter.route('/')
        .get((req,res)=>{
            res.render("books",{books,nav,title:"Books"});
        });

    booksRouter.route('/:id')
        .get((req,res)=>{
            const id=req.params.id;

             res.render("book",{nav,
            title:"Books",book:books[id]
        });
    });
    return booksRouter;
    
}
module.exports=route;