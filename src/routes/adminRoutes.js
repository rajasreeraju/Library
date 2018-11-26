const express=require('express');
const adminRouter=express.Router();
const BookData=require("../model/bookData");
function route(nav){
    adminRouter.route('/')
    .get((req,res)=>{
        res.render("adminRoutes",{nav,title:"Add Book"});
    });
    adminRouter.route('/add')
    .get((req,res)=>{
        var item={bookname:req.param("bookname"),
            author:req.param("author"),
            publishers:req.param("publishers"),
            issuedate:req.param("issuedate"),
            category:req.param("category")
        }
        var book=new BookData(item);
        book.save();
        res.redirect('/books');
        
    });
    return adminRouter;
}
module.exports=route;