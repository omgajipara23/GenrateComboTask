const express = require('express')
const bodyParser = require('body-parser')
const db = require('../models')
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const DeleteData = async function (req, res) {
    try {
        const id = req.query.id
        const data = await db.OptionMaster.destroy({
            where: {
                '$OptionMasters.selectId$': id
            },
            include: {
                model: db.SelectMaster,
            }
        })
        if (data != 0) {
            const data = await db.SelectMaster.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200).json({
                success: true,
                message: `user with id=${JSON.parse(id)} deleted!!!!!`
            })
        } else {
            return res.status(200).json({
                success: false,
                message: "Id is not present!!!!"
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            error: error
        })
    }
}

module.exports = { DeleteData }