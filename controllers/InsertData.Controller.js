var express = require('express')
const db = require('../models')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

var InsertData = async (req, res) => {
    try {
        const data = await db.SelectMaster.bulkCreate([{
            name: "city",
            OptionMasters: [{ optionname: "Ahemdabad" }, { optionname: "Junagadh" }, { optionname: "Rajkot" }]
        }],
            {
                include: [{ model: db.OptionMaster }]
            }
        )
        console.log(data);
        return res.status(200).json({
            success: true,
            message: "Data Inserted !!!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something Went Wrong!!!'
        })
    }
}

module.exports = { InsertData }
