const express = require('express')
const bodyParser = require('body-parser')
const db = require('../models')
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const UpdateData = async function (req, res) {
    try {
        const id = req.query.id
        const body = req.body
        console.log(id + body);
        const data = await db.OptionMaster.update(body, {
            where: {
                id: id
            }
        })
        if (data[0] === 0) {
            return res.status(200).json({
                success: false,
                message: "no user found!!!"
            })
        } return res.status(200).json({
            success: true,
            message: "user update!!!!" + data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error
        })
    }
}

module.exports = {UpdateData}