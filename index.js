const express=require('express');
const chalk=require('chalk');
const path=require("path");
var app=new express();
const nav=[{link:'/books',title:'Books'},
{link:'/authors',title:'Authors'},
{link:'/aboutus',title:'ABOUT Us'},
{link:'/contactus',title:'CONTACT US'},
{link:'/addbooks',title:'ADD BOOK'}]

const aboutusRouter=require("./src/routes/aboutusRoutes.js")(nav);
const contactusRouter=require("./src/routes/contactusRoutes.js")(nav);
const authorRouter=require("./src/routes/authorRoutes.js")(nav);
const booksRouter=require("./src/routes/bookRoutes.js")(nav);
const addbooksRouter=require("./src/routes/addbooksRoutes.js")(nav);
app.use('/addbooks',addbooksRouter);
app.use('/aboutus',aboutusRouter);
app.use('/contactus',contactusRouter);
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/view');
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index',{nav,title:"Library"});
});
app.listen(3001,function(){
    console.log("listening to port"+chalk.green('3001'));
});