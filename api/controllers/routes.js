'use strict';
// let productsCtrl = require('./controllers/ProductsController');

const express = require('express');
const userCtrl = require('./usercontroller');
const loaixecontroller = require('./loaixecontroller');
const thongtincanhanxe = require('./thongtincanhanxecontroller'); 
const cuahangcontroller = require('./cuahangcontroller');
const chatcontroller = require('./chatcontroller');
const phieuluucontroller = require('./phieuluucontroller')
const phutungxecontroller = require('./phutungcontrollers'); 
const route = express.Router();

//user

route.get("/user",userCtrl.getuser);
route.post("/user",userCtrl.postuser);

//loaixe

route.get("/loaixe",loaixecontroller.getloaixe);
route.post("/loaixe",loaixecontroller.postxe);


//thongtincanhanxe

route.post("/xecanhan",thongtincanhanxe.getxecanhan);
route.post("/xecanhan1",thongtincanhanxe.postxecanhan);



// phieu luu bao tri xe
route.post("/phieuluu",phieuluucontroller.postphieuluu);
route.post("/themphieuluu",phieuluucontroller.themphieuluu);
route.post("/chitietphieuluu",phieuluucontroller.chitietphieuluu);
// phieu hen bao tri xe

// phu tung xe

route.get("/phutung",phutungxecontroller.getphutung);

// chat
route.get("/doanchat",chatcontroller.getallgroudchat);
route.post("/chat",chatcontroller.getchat)
route.post("/doanchat",chatcontroller.getdoanchat);
route.post("/doanchatuser",chatcontroller.getdoanchatuser);



// cua hang

route.get("/cuahang",cuahangcontroller.getcuahang);
module.exports = route;

// module.exports = function(app) {
  

//   // todoList Routes
//   app.route('/products')
//     .get(productsCtrl.get)
//     .post(productsCtrl.store);

//   app.route('/products/:productId')
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
// };
