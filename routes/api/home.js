const express = require("express")
const router = express.Router()



//1. Greetings Route
router
.route("/greetings/:name")
.get((req,res)=>{

   return res.status(200).json({msg: `Hi there, ${req.params.name}!`})
})










module.exports = router