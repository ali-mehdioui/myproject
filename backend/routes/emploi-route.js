const cont=require('../controllers/emploi-controller');
const express = require('express');
const rtemp=express.Router();

rtemp.post('/liste-emploi',cont.listemploi);
rtemp.post('/liste-emploi/id',cont.detailemploi)
rtemp.post('/liste-poste',cont.titreposte)

module.exports=rtemp;