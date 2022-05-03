// Imports
const express = require("express")
// Where did line 4 come from? -_^
//const { url } = require("inspector")

const home = require('./routes/api/home')


//Config
require("dotenv").config()

//Initialize express
const server = express()

// Body Parser MiddleWare
server.use(express.json())

// M.W to allow handling of form submissions
server.use(express.urlencoded({extended:false}))

// Connect server.js w/ route files 
server.use('/', home);

server.get('/',(req,res)=>{ // - Delete?
    res.json({msg:`Welcome to Variety Express! 1. Greetings:http://localhost:1000/greetings/:name | 2. Magic 8 Ball: http://localhost:1000/tips/:total/:tipPercent | 3. Bottles of Milk, I : http://localhost:1000/bottles | 4. Bottles of Milk, II: http://localhost:1000/bottles/totalBottles `
})
})

//Create PORT
const PORT = process.env.PORT || 1000

// Listen at PORT
server.listen(PORT, ()=>
console.log(` Server is listening at port: ${PORT}`)
)

