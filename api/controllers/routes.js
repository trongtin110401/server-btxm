'use strict';
// let productsCtrl = require('./controllers/ProductsController');

const express = require('express');
const userCtrl = require('./usercontroller');
const loaixecontroller = require('./loaixecontroller');
const thongtincanhanxe = require('./thongtincanhanxecontroller'); 
const cuahangcontroller = require('./cuahangcontroller');
const chatcontroller = require('./chatcontroller');

const route = express.Router();

//user

route.get("/user",userCtrl.getuser);
route.post("/user",userCtrl.postuser);

//loaixe

route.get("/loaixe",loaixecontroller.getloaixe);
route.post("/loaixe",loaixecontroller.postxe);


//thongtincanhanxe

route.get("/xecanhan",thongtincanhanxe.getxecanhan);


// phieu luu bao tri xe


// phieu hen bao tri xe

// phu tung xe

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
