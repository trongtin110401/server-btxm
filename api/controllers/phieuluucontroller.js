'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./db')

const phieuluucontroller = {
    
    postphieuluu: (req, res) => {
        let data = req.body;
        let sql = 'SELECT * FROM quanlybaotrixe.phieuluuthongtinbaotrixe a Where a.idxe=?;'
        db.query(sql, [data.idxe], (err, response) => {
            if (err) throw err
            res.send(response)
        })
    },
    chitietphieuluu: (req, res) => {
        let data = req.body;
        let sql = 'select * from quanlybaotrixe.phieuluuthongtinbaotrixe a,quanlybaotrixe.thongtinxecanhan b,quanlybaotrixe.phieuluuthongtinbaotrixe_has_phutungxe c, quanlybaotrixe.phutungxe d, quanlybaotrixe.cuahangsuachua e where a.idthongtinbaotrixe=c.idphieuluu and a.idcuahang = e.idcuahang and b.idxe = a.idxe and c.phutungxe_idphutungxe = d.idphutungxe and a.idthongtinbaotrixe=?'
        db.query(sql, [data.idthongtinbaotrixe], (err, response) => {
            if (err) throw err
            res.send(response)
        })
    },
    themphieuluu: (req, res) => {

        //Gủi lên username, address, phone, paymentid từ app
        let data = req.body;
        db.query('INSERT INTO phieuluuthongtinbaotrixe( `idthongtinbaotrixe`, `thoigian`, `idcuahang`, `idxe`) VALUES (0,?,?,?)', [data.thoigian, data.idcuahang, data.idxe], (err, response) => {
    
            //Lấy orderid bằng cách truy vấn theo username và ORDERTIME (thời gian tạo) giảm dần bởi order dc thêm vào là mới nhất
            db.query('SELECT idthongtinbaotrixe FROM phieuluuthongtinbaotrixe WHERE phieuluuthongtinbaotrixe.idxe = ? ORDER BY phieuluuthongtinbaotrixe.idthongtinbaotrixe DESC LIMIT 1;', [data.idxe], function (err, temp) {
                temp.forEach(idphieuluu => {
                    data.listdata.forEach(element => {
                        let sql = 'INSERT INTO quanlybaotrixe.phieuluuthongtinbaotrixe_has_phutungxe(`phutungxe_idphutungxe`,`thoigian`,`idphieuluu`) VALUES (?,?,?)'
                        db.query(sql, [element.phutungxe_idphutungxe,data.thoigian,idphieuluu.idthongtinbaotrixe], (err, response) => {
                            console.log(element.phutungxe_idphutungxe);
                            console.log(data.thoigian);
                            console.log(idphieuluu.idthongtinbaotrixe);

                        })
                        
                });
                })
                
                //Từ orderid có được thực hiện query để add dữ liệu từ cart sang orderdetail trên orđerid
                // db.query('INSERT INTO tblorderdetail (ORDERID, FOODID, QUANTITY) SELECT ?, tblcart.FOODID, tblcart.QUANTITY FROM tblcart WHERE tblcart.USERNAME = ?', [orderid, data.username], function (err, result) {
                //     if (err) throw err
                //     res.send({
                //         message: 'Add to Order Succes!'
                //     });
    
                //     //Xóa cart người dùng
                //     db.query('DELETE FROM tblcart WHERE USERNAME = ? ', [data.username], function (err, result) {
                //         if (err) throw err
                //         res.send({message: 'Delete Cart Succes!' });
                //     })
                // })
                if (err) throw err
                res.send({ message: 'Insert success!' })
            })
           
        })
    }
}
module.exports = phieuluucontroller;