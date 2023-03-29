const express=require('express');
const multer=require('multer');
const upload=multer({dest:'uploads/'});
const app=express();
app.post('/upload_files',upload.array('files'),uploadfiles)
function uploadfiles(req,res){
    console.log(req.body);
    console.log(req.files);
    res.json({message:'successfully uploaded files'});
};
app.listen(3000);