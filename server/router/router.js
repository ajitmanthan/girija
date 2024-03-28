const express = require('express')
const router = express.Router()
const Signup = require('../models/user')


router.post('/signup',(req,res)=>{
    try{


    const {uname,upass}=req.body
// if(uname=='' ){
//     console.log('if')
//     return res.status(212).json({code:'500'})
// }


 new Signup ({uname,upass}).save() 

}catch(err){
    console.log(err)
}

})

module.exports=router