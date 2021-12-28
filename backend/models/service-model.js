const mongoose=require('mongoose');

const serviceshéma=mongoose.Schema({

         nmservice:{type:String, required:true},
         dt:{prix:{type:Number},jour:{type:Number}},
         categorie:{type:String,required:true},
         description:{type:String,required:true},
         nvexp:{type:String,required:true},
         tgser:{type:String,required:true},
         aut:{type:String,required:true},
         date:{type:Date},
         doc:{type:String}
})

module.exports=mongoose.model('Service',serviceshéma);