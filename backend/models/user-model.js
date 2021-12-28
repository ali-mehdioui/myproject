const mongoose= require('mongoose');
const unique= require('mongoose-unique-Validator')
const usershéma=mongoose.Schema({

   email:{ type: String, required:true, unique:true},
   password:{ type: String, required:true}
   
});

module.exports=mongoose.model('User',usershéma);