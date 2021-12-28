const express = require('express');
const bodyParser = require('body-parser');
const router=require('./routes/user-route.js');
const router2=require('./routes/emploi-route');
const router3=require('./routes/service-route');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/* node js version 4. ca ne fonctionne plus j l'ai remplacé par la version 2.12 !
mongoose.connect('mongodb+srv://ali:azerty123@cluster0.ec69y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log(err));*/
/**https://www.mongodb.com/try/download/community , node js version 2.12  */
  mongoose.connect('mongodb://ali:azerty123@cluster0-shard-00-00.ec69y.mongodb.net:27017,cluster0-shard-00-01.ec69y.mongodb.net:27017,cluster0-shard-00-02.ec69y.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-yona2n-shard-0&authSource=admin&retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log(err));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(router);
app.use(router2);
app.use(router3);

/*
app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
   next();
});

*/

module.exports = app;