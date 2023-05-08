const express = require('express')
const bodyParser = require('body-parser')
const db = require('../models')
const { Op, json } = require("sequelize");
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const UserChoice = async (req, res) => {
    res.send(`<form action="/genratecombo">
     <label>Choose An Option What You Want To Create:</label>
     <select name="combotype" >
       <option value="checkbox">Check Box</option>
       <option value="rebiobutton">Radio Button</option>
       <option value="combobox">Combo Box</option>
     </select>
     <br><br>
   <label>Choose An Option You Want To Create:</label>
   <select name="userchoice" >
     <option value="state" id='1'>State</option>
     <option value="technology" id='2'>Technology</option>
     <option value="city" id='3'>City</option>
     <option value="language" id='4'>Language</option>
   </select>
   <br><br>
   <input type="submit" value="Submit">
 </form>`)
}

const GenerateCombo = async (req, res) => {
    let userchoice = req.query.userchoice
    let combotype = req.query.combotype

    var data
    var s = ""

    async function SelectData() {
        data = await db.SelectMaster.findAll({
            where: {
                name:
                {
                    [Op.like]: `%${userchoice}%`
                }
            },
            include: [{ model: db.OptionMaster }]
        })
        return data
    }

    await SelectData()

    if (combotype == 'combobox') {

        async function ComboBox() {
            var datalength = data[0].OptionMasters.length

            var halfString1 = `<select>`
            var halfString2 = `</select>`

            for (let i = 0; i < datalength; i++) {
                s += `<option value='state'>${data[0].OptionMasters[i].optionname}</option>`
            }
            var finalString = halfString1.concat(s, halfString2)
            return finalString
        }
        res.send(await ComboBox())
    }

    if (combotype == "rebiobutton") {

        async function Radiobutton() {
            var datalength = data[0].OptionMasters.length

            for (let i = 0; i < datalength; i++) {
                s += `<input type="radio" id="radio${i}" name="radiobutton"><label for="radio${i}">${data[0].OptionMasters[i].optionname}</label></input> <br>`
            }
            return s
        }
        res.send(await Radiobutton())
    }

    if (combotype == 'checkbox') {

        async function Checkbox() {
            var datalength = data[0].OptionMasters.length

            for (let i = 0; i < datalength; i++) {
                s += `<input type="checkbox" id="checkbox${i}" name="checkbox${i}">
                <label for="checkbox${i}">${data[0].OptionMasters[i].optionname}</label><br>`
            }
            return s
        }
        res.send(await Checkbox())
    }
}

module.exports = { GenerateCombo, UserChoice }