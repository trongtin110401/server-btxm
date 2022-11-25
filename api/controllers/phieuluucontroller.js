'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const phieuluucontroller = {
    
    postphieuluu: (req, res) => {
        let data = req.body;
        let sql = 'select * from quanlybaotrixe.phieuluuthongtinbaotrixe a,quanlybaotrixe.thongtinxecanhan b,quanlybaotrixe.phieuluuthongtinbaotrixe_has_phutungxe c, quanlybaotrixe.phutungxe d, quanlybaotrixe.cuahangsuachua e where a.idthongtinbaotrixe=c.idphieuluu and a.idcuahang = e.idcuahang and b.idxe = a.idxe and c.phutungxe_idphutungxe = d.idphutungxe and b.idxe = ?'
        db.query(sql, [data.idxe], (err, response) => {
            if (err) throw err
            res.send(response)
        })
    }
}
module.exports = phieuluucontroller;