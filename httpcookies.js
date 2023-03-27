const express=require('express');
const cookieparser=require('cookie-parser');
const app=express();
app.use(cookieparser());
app.get('/setcookie',(req,res) =>{
    res.cookie('cookie token name','encrypted cookie string value');
    res.send('learning http cookie');
});
app.get('/getcookie',(req,res) =>{
    console.log(req.cookies);
    res.send(req.cookies);
})
app.get('/deletecookie',(req,res) =>{
    res.clearCookie();
    res.send('cookie has deleted')
})
app.listen(3000);