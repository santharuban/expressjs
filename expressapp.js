const express=require('express');
const app=express();
app.param('id',(req,res,next,id) =>{
    console.log('called only once');
    next();
});
app.get('/user/:id',(req,res,next) =>{
    console.log('matches');
});
app.get('/user/:id',(req,res) =>{
    console.log('application');
    res.end();
});
app.listen(3000);