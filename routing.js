const express=require('express');
const app=express();
const port=3000;
const user=require('./routes/user');
const about=require('./routes/about');
app.use('/user',user);
app.use('/about',about);

app.listen(port,() =>{
    console.log(`server running in the ${port}`);
});