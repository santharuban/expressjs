const express=require('express');
const basicauth=require('express-basic-auth');
const app=express();
app.use(basicauth({
    users:{'admin':'supersecret'}
}));
app.get('/',(req,res) =>{
    res.send('authorized');
});
app.listen(3000);