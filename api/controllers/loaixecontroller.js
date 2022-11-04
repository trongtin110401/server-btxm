'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const loaixecontroller = {
    
    getloaixe: (req, res) => {
        let sql = 'SELECT * FROM loaixe'
        db.query(sql, (err, response) => {
            if (err) console.log(err)
            res.send(response)
        })
    },
    postxe: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO quanlybaotrixe.loaixe SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.send({ message: 'Insert success!' })
        })
    }
}
module.exports = loaixecontroller;