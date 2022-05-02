// Imports
const express = require("express")
const { url } = require("inspector")

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

server.get('/',(req,res)=>{
    res.send(url)
})

//Create PORT
const PORT = process.env.PORT || 1000

// Listen at PORT
server.listen(PORT, ()=>
console.log(` Server is listening at port: ${PORT}`)
)

