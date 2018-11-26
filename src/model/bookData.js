const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryDb');
const Schema=mongoose.Schema;

var NewBookSchema=new Schema({
    bookname:String,
    author:String,
    publishers:String,
    issuedate:String,
    category:String
});
var BookData=mongoose.model('book-data',NewBookSchema);
module.exports=BookData;