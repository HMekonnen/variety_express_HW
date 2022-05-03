const bottlesTune= (req, res, next)=> {
   
    let totalBottles = 99

    for (let i= totalBottles; i>=0; i--){
        
        if (i >=1){
       
        return res.json({msg: `${i} bottle(s) of milk on the wall, ${i} bottle(s) of milk.Take one down, pass it around:` , link: `http://localhost:1000/bottles/${i-1}`})
         
        }
        
        else if (totalBottles<=0){
         return  res.json({msg: `and then there were ${i} bottles of milk on the wall`})
       }
       else{
        return   res.json({msg: `Please enter a number greater than zero :) `})
       }
       next() 
}}

module.exports = bottlesTune;