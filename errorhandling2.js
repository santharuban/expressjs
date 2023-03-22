const express=require('express');
const app=express();
app.get('/',function(req,res){
    var err=new Error('something went wrong');
    next(err);
});
app.use(function(err,req,res,next){
    res.status(404);
    res.send('oops,something went wrong');
});
app.listen(3000);