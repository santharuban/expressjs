const express=require('express');
const app=express();
const fs=require('fs')
app.get('/',(req,res,next) =>{
    fs.readFile('./text.txt',(err,data) =>{
        if(err){
            next(err)
        }else{
            res.send(data);
        }
    });
});
app.listen(3000,()=>{
    console.log('error handling');
});
// app.get('/user/:id',async (req,res,next) =>{
//     const user=await getUserById(req.params.id)
//     res.send(user)
// });
// app.listen(3000);
