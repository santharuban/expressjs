// const express=require('express');
// const app=express();
// const port=3000;
// app.get('/contact',(req,res) =>{
//     res.send('routing');
// });
// app.listen(port,() =>{
//     console.log(`server running`);
// });
const express=require('express');
const app=express();
const port=3000;
const cb0=function(req,res,next){
    console.log('cb0');
    next()
}
const cb1=function(req,res,next){
    console.log('cb1');
    next()
}
const cb2=function(req,res,next){
    console.log('cb2');
    next()
}
app.get('/router',[cb0,cb1,cb2],(req,res,next) =>{
    console.log('the response will be sent by the next function');
    next()
},(req,res) =>{
    res.send('hello from c');
});
app.listen(port,() =>{
    console.log(`server running in the port ${port}`);
});

