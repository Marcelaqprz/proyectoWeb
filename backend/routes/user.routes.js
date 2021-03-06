const express = require('express')
const router = express.Router()
const db = require('../database/db.database')

// User
router.get("/getallusers", async (req, res, next)=>{
   const usuarios = await db.getAllUsers()
   res.send(usuarios)
   //console.log(usuarios)
})
router.get("/getuseremail", async (req, res, next)=>{
    console.log(req.query.email)
    const useremail = await db.getUserByEmail(req.query.email)
    res.send(useremail)
})

router.delete("/deleteuser", async (req, res, next)=>{
    const duser = await db.deleteUserByEmail(req.query.email)
    res.send(duser)
})

router.post("/upuseremail", async (req, res, next)=>{
   // console.log(req.body)
    try {
        await db.UpdateUserByEmail(req.body)
        res.send({
            data:"ok"
        })
      } catch (error) {
        console.log('error')
        res.sendStatus(404)
      }
})

router.post("/login", async (req, res, next)=>{
    //console.log(req.body.email)
    //console.log(req.body.password)
    try {
        const sl = await db.loginStatus(req.body.email, req.body.password)
        res.send(sl)
    } catch (error) {
        console.log('error')
        res.sendStatus(404)
    }
})

router.post("/createuser", async (req, res, next) =>{
    const user = req.body
    console.log(user)
    await db.createUser(user)
    res.sendStatus(200)    
})

// Products

router.post("/createproducts", async (req, res, next)=>{
    const product = req.body
    await db.createProduct(product)
    res.sendStatus(200)
})

router.delete("/deleteproduct", async (req, res, next)=>{
    const dproduct = await db.deleteProductByName(req.query.name)
    res.send(dproduct)
})

router.get("/getallproducts", async (req, res, next)=>{
    const gproducts = await db.getAllProducts()
    res.send(gproducts)
 })

 router.get("/getproductname", async (req, res, next)=>{
    const gproductn = await db.getProductByName(req.query.name)
    res.send(gproductn)
})

router.post("/upproductname", async (req, res, next)=>{
    try {
        await db.UpdateProductByName(req.body)
        res.sendStatus(200)
      } catch (error) {
        console.log('error')
        res.sendStatus(404)
      }
})

module.exports = router;