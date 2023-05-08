var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const combo = require('./routes/GenrateComboRouts')

app.use(combo)

app.listen (5000, ()=>{
    console.log("~~~~~~App Is Listen Successfully~~~~~~");
})