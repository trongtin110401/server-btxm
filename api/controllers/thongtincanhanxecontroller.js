'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const thongtincanhanxecontroller = {
    getxecanhan: (req, res) => {
        let data = req.body;
        let sql = 'SELECT * FROM quanlybaotrixe.thongtinxecanhan a, quanlybaotrixe.loaixe b where iduser = ? and a.loaixe_idloaixe=b.idloaixe;'
        db.query(sql, [data.iduser], (err, response) => {
            if (err) throw err
            res.send(response)
        })
    },
    postxecanhan: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO quanlybaotrixe.thongtinxecanhan SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.send({ message: 'Insert success!' })
        })
    }
   
}
module.exports = thongtincanhanxecontroller;