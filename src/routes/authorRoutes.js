const express=require('express');
const authorRouter=express.Router();
function route(nav){
    var authors=[{name:"Arundhathi Roy"},
            {name:"Ravinder Singh"},
            {name:"J K Rowlings"},
            {name:"Chethan Bhagath"},
            {name:"Kamala Das"}]
    authorRouter.route('/')
        .get((req,res)=>{
        res.render("authors",{authors,nav,title:"Books"});
    });
    authorRouter.route('/:id')
        .get((req,res)=>{
    var id=req.params.id;

    res.render("author",{
        nav:[{link:'/books',title:'Books'},
        {link:'/authors',title:'Authors'},
        {link:'/aboutus',title:'ABOUT Us'},
        {link:'/contactus',title:'CONTACT US'}],
        title:"Authors",author:authors[id]

    });
  });
  return authorRouter;
}
module.exports=route;