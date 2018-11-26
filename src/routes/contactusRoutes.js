const express=require('express');
const contactusRouter=express.Router();
function route(nav){
    var contactus={Address:"Central Library,Kannur,Kerala",Phone:"7025301708",Email:"centrallibrarykannur@gmail.com"}
    contactusRouter.route('/')
        .get((req,res)=>{
            res.render("contactus",{contactus,nav,title:"Contact Us"});
    });
    return contactusRouter;
}
module.exports=route;