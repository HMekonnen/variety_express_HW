const express = require("express")
const router = express.Router()



//1. Greetings Route
router
.route("/greetings/:name")
.get((req,res)=>{

   return res.status(200).json({msg: `Hi there, ${req.params.name}!`})
})
//2. Tip Calculator 
router
.route("/:total/:tipPercent")
.get((req,res)=>{
const tip = ((req.params.total * req.params.tipPercent)/100)
   return res.status(200).json({msg: `Hello, based on your total: $${req.params.total}.00, a ${req.params.tipPercent}% tip = $${tip}.00.`})
})









module.exports = router