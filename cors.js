const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;
const corsoptions={
    origin:'http:example.com',
    optionssuccessstatus:200
}
app.get('/products/:id',cors(corsoptions),function(req,res,next){
    res.json({message:'this is cors-enabled for single route'})
});
app.listen(port,function(){
    console.log(`cors is running in the port ${port}`);
});