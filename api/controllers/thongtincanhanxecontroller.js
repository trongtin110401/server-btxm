'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const thongtincanhanxecontroller = {
    
    getxecanhan: (req, res) => {
        let sql = 'SELECT * FROM thongtinxecanhan'
        db.query(sql, (err, response) => {
            if (err) console.log(err)
            res.send(response)
        })
    }
   
}
module.exports = thongtincanhanxecontroller;