const express=require('express');
const app=express();
app.get('/',(req,res) =>{
    res.status(400);
    res.send('bad request received');
});
app.listen(3000,function(err){
    if(err){
        console.log(err);
    }
    console.log('server is running in the port');
});