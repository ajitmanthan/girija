const mongo = require('mongoose')
const usersch = new mongo.Schema({
    uname:{
        type:String
    },
    upass:{
        type:String
    }
})

const Userschema = mongo.model('oo',usersch) 

module.exports = Userschema