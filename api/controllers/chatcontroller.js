'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const chatcontroller = {
    getallgroudchat: (req, res) => {
        let sql = 'SELECT * FROM quanlybaotrixe.doanchat a,quanlybaotrixe.cuahangsuachua b where a.cuahangsuachua_idcuahang=b.idcuahang;'
        db.query(sql, (err, response) => {
            if (err) console.log(err)
            res.send(response)
        })
    },
    getchat: (req, res) => {
        let data = req.body;
        let sql = 'SELECT * FROM quanlybaotrixe.tinnhan where doanchat_cuahangsuachua_idcuahang=? and doanchat_user_iduser=?;'
        db.query(sql, [data.idcuahang,data.iduser], (err, response) => {
            if (err) throw err
            res.send(response)
        })
    },
    getdoanchat: (req, res) => {
        let data = req.body;
        let sql = 'SELECT * FROM quanlybaotrixe.doanchat a,quanlybaotrixe.cuahangsuachua b,quanlybaotrixe.user c where  a.cuahangsuachua_idcuahang=b.idcuahang and a.cuahangsuachua_idcuahang=? and a.user_iduser=c.iduser;'
        db.query(sql, [data.idcuahang], (err, response) => {
            if (err) throw err
            res.send(response)
        })
    },
    getdoanchatuser: (req, res) => {
        let data = req.body;
        let sql = 'SELECT * FROM quanlybaotrixe.doanchat a,quanlybaotrixe.cuahangsuachua b where a.cuahangsuachua_idcuahang=b.idcuahang and a.user_iduser=?;'
        db.query(sql, [data.iduser], (err, response) => {
            if (err) throw err
            res.send(response)
        })
    },
}
module.exports = chatcontroller;