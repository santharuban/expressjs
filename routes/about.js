const express=require('express');
const router=express.Router();

router.get('/',(request,response) =>{
    response.send({data:'about are entered'});
});
router.post('/',(request,response) =>{
    response.send({data:'about are created'});
});
router.put('/',(request,response) =>{
    response.send({data:'about are updated'});
});
router.delete('/',(request,response) =>{
    response.send({data:'about are deleted'});
});
module.exports=router;