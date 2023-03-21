const express=require('express');
const app=express();
function logurl(req,res,next){
    console.log('Requested url:',req.originalurl);
    next()
}
function logmethod(req,res,next){
    console.log('Requested url:',req.method)
    next()
}
const log=[logurl,logmethod]
app.get('/user/:id',log,(req,res,next) =>{
    res.send('user information')
});
app.listen(3000);