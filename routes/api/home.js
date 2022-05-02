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
.route("/tips/:total/:tipPercent")
.get((req,res)=>{
const tip = ((req.params.total * req.params.tipPercent)/100)
   return res.status(200).json({msg: `Hello, based on your total: $${req.params.total}.00, a ${req.params.tipPercent}% tip = $${tip}.00.`})
}); 

//3. Magic 8 Ball
router
.route("/magic/:question")
.get((req,res)=>{
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", 
    "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", 
    "Cannot predict now","Concentrate and ask again","Don't count on it", "My reply is no",
     "My sources say no","Outlook not so good", "Very doubtful"]

     const answer = responses[Math.floor(Math.random()*responses.length)]
    
     return res.status(200).json({msg: `You asked: ${req.params.question}?  - Magic 8 Ball says: ${answer}`})
});









module.exports = router