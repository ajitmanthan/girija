const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyparser = require('body-parser')
app.use(cors({origin:'http://localhost:5173'
,credentials:true}))
const router = require('./router/router.js')
require('./database/config')
app.use(express.json())


app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, "./client/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./client/dist/index.html"),
    function(err){
        res.status(500).send(err)
    }
    )
})



app.use('/',router)
app.listen(9999,()=>{
    console.log('running on 9999');
})
