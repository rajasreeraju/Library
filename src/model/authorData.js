const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryDb');
const Schema=mongoose.Schema;

var NewAuthorSchema=new Schema({
    bookname:String,
    author:String
});
var authorData=mongoose.model('author-data',NewAuthorSchema);
module.exports=authorData;