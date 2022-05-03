const express = require('express')
const router = express.Router()
const db = require('../database/db.database')

// User
router.get("/getallusers", async (req, res, next)=>{
   const usuarios = await db.getAllUsers()
   res.send(usuarios)
})
router.get("/getuseremail", async (req, res, next)=>{
    const useremail = await db.getUserByEmail(req.query.email)
    res.send(useremail)
})

router.delete("/deleteuser", async (req, res, next)=>{
    const duser = await db.deleteUserByEmail(req.query.email)
    res.send(duser)
})

router.post("/upuseremail", async (req, res, next)=>{
    console.log(req.body) 
    try {
        await db.UpdateUserByEmail(req.body)
        res.sendStatus(200)
      } catch (error) {
        console.log('error')
        res.sendStatus(404)
      }
})

router.post("/createuser", async (req, res, next) =>{
    const user = req.body
    await db.createUser(user)
    res.sendStatus(200)    
})

// Products

router.post("/createproducts", async (req, res, next)=>{
    const product = req.body
    await db.createProduct(product)
    res.sendStatus(200)
})

// Carrito

router.post("/createcarrito", async (req, res, next)=>{
    const carrito = req.body
    await db.createCarrito(carrito)
    res.sendStatus(200)
})

// FactsSales

router.post("/createfactsale", async (req, res, next)=>{
    const fact = req.body
    await db.createFact(fact)
    res.sendStatus(200)
})

module.exports = router;