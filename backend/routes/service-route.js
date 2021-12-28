const rt=require('../controllers/service-controller')
const express=require('express');
const multerConfig = require('../middleware/multer-config');
const route=express.Router();

route.post('/ajouter-mon-service', multerConfig, rt.ser)
route.post('/showmyservices',rt.show)
route.post('/service/detail/:id',rt.showdetaiilservice) 
route.delete('/service/delete/:id',rt.sup);
module.exports=route;