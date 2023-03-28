const express=require('express');
const app=express();
const port=3000;
app.get('/user/title="comics"?author="john"',(req,res,next) =>{
    next();
});
app.use((req,res,next) =>{
    if(req.query && req.query.title){
        req.query.title=req.query.book_title;
        delete req.query.title;
    }
    if(req.query && req.query.author){
        req.query.author=req.query.book_author;
        delete req.query.author;
    }
    next();
});
class BookService{
    print(req){
        const booktitle=req.query.book_title;
        const bookauthor=req.query.book_author;
        console.log(`title is ${booktitle}`);
        console.log(`author is ${bookauthor}`);
    }
}
app.get('/user',(req,res) =>{
    const bookservice=new BookService;
    bookservice=print(req);
    res.send('please look in the console');
})
app.listen(port,() =>{
    console.log(`running in the port ${port}`);
});