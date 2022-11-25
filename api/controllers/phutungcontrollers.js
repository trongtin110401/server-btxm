'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const phutungxecontroller = {
    getphutung: (req, res) => {
        let sql = 'SELECT * FROM phutungxe;'
        db.query(sql, (err, response) => {
            if (err) console.log(err)
            res.send(response)
        })
    },
}
module.exports = phutungxecontroller;