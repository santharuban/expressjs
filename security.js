const express=require('express');
const app=express();
const helmet=require('helmet');
app.use(helmet());
app.disable('secutity in express js');
app.get('/',(req,res) =>{
    res.send('security');
});
app.listen(3000);