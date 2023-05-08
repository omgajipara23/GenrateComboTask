const { GenerateCombo, UserChoice, faker_data } = require('../controllers/GenerateCombo.controller')
const express = require('express')
const { one_to_many, InsertData } = require('../controllers/InsertData.Controller')
const { UpdateData } = require('../controllers/Update.Controller')
const { DeleteData } = require('../controllers/Delete.Controller')
const app = express()

app.post('/insertdata', InsertData)
app.get('/genratecombo', GenerateCombo)
app.get('/userchoice', UserChoice)
app.put('/update',UpdateData)
app.get('/delete', DeleteData)
module.exports = app
