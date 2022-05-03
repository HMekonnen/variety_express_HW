const express = require("express")
const router = express.Router()



/**========================================================================================================================================= */

//1. Greetings Route
router
.route("/greetings/:name")
.get((req,res)=>{

   return res.status(200).json({msg: `Hi there, ${req.params.name}!`})
})


/**========================================================================================================================================= */

//2. Tip Calculator 

router
.route("/tips/:total/:tipPercent")
.get((req,res)=>{
const tip = ((req.params.total * req.params.tipPercent)/100)
   return res.status(200).json({msg: `Hello, based on your total: $${req.params.total}.00, a ${req.params.tipPercent}% tip = $${tip}.00.`})
}); 



/**========================================================================================================================================= */


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



/**========================================================================================================================================= */
// 4a. Take one Down and Pass it Around default starting at 99 bottles + next()

router
.route("/bottles")
.get((req,res)=>{

let totalBottles =  99

for (let i= totalBottles; i>=0; i--){

    if (i >=1){

    return res.status(202).json({msg: `${i} bottle(s) of milk on the wall, ${i} bottle(s) of milk.Take one down, pass it around:` , link: `http://localhost:1000/bottles/${i-1}`})

    }

    else if (totalBottles<=0){
      return res.status(202).json({msg: `and then there were ${i} Bottles of milk on the wall.`})
   }
   else{
      return res.status(400).json({msg: `Please enter a number greater than zero :) `})
   }
   
}})




// 4b. Take one Down and Pass it Around using :totalBottles
/**========================================================================================================================================= */
router
.route( "/bottles/:totalBottles")
.get((req,res)=>{
let totalBottles = req.params.totalBottles || 99

for (let i= totalBottles; i>=0; i--){
    
    if (i >=1){
   
       return res.status(202).json({msg: `${i} bottle(s) of milk on the wall, ${i} bottle(s) of milk.Take one down, pass it around:` , link: `http://localhost:1000/bottles/${i-1}`})
     
    }
    
    else if (totalBottles<=0){
       return  res.status(202).json({msg: `and then there were ${i} bottles of milk on the wall`})
   }
   else{
      return res.status(400).json({msg: `Please enter a number greater than zero :) `})
   }
   
}

})



module.exports = router