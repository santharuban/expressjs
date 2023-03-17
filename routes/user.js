const express=require('express');
const router=express.Router();

router.get('/',(request,response) =>{
    response.send({data:'datas are entered'});
});
router.post('/',(request,response) =>{
    response.send({data:'datas are created'});
});
router.put('/',(request,response) =>{
    response.send({data:'datas are updated'});
});
router.delete('/',(request,response) =>{
    response.send({data:'datas are deleted'});
});
module.exports=router;