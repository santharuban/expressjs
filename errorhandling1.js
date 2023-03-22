const express=require('express');
const app=express();
const fs=require('fs');
app.get('/',[function(req,res,next){
    fs.writeFile('./file.txt','data',next);
},
function(req,res){
    res.send('ok');
}
]);
app.listen(3000);
