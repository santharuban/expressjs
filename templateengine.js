const express=require('express');
const app=express();
app.set('view engine','pug');
app.get('/',(req,res) =>{
    res.send('index',{title:'hey',message:'hello there'})
});
app.listen(3000);