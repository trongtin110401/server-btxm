'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const cuahangcontroller = {
    getcuahang: (req, res) => {
        let sql = 'SELECT * FROM cuahangsuachua;'
        db.query(sql, (err, response) => {
            if (err) console.log(err)
            res.send(response)
        })
    },
}
module.exports = cuahangcontroller;