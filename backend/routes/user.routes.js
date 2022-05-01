const express = require('express')
const router = express.Router()

const response = {
    "nombre":"El checo"
}
const a = {
    "user1" : "juan",
    "user2" : "pepe"
}

router.get("/getuser", (req, res, next)=>{
    console.log("hello word")
    res.send(response)
})

router.get("/getjson", (req, res, next)=>{
    res.send(a)
})

module.exports = router;