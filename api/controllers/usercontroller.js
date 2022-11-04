'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const usercontroller = {
    
    getuser: (req, res) => {
        let sql = 'SELECT * FROM user'
        db.query(sql, (err, response) => {
            if (err) console.log(err)
            res.send(response)
        })
    },
    postuser: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO user SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.send({ message: 'Insert success!' })
        })
    }
}
module.exports = usercontroller;