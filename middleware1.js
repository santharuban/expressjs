const express=require('express');
const app=express();

app.use(middleware1)
app.use(middleware2);
function middleware(request,response,nextmiddleware){
    nextmiddleware()
}

function middleware1(req,res,next){
    req.customvalue=100;
    console.log('i am middleware1')
    next()
}
function middleware2(req,res,next){
    console.log(`i am middleware2,the customvalue is:${req.customvalue}`);
    req.customvalue=500;
    next()
}
function middleware3(req,res,next){
    console.log('i am middleware3');
    next()
}
app.get('/',middleware3,(req,res,next) =>{
    console.log('i am middleware')
    res.send(`<h1>the value is:${req.customvalue}`);
});
app.listen(3000);