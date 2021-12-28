const mongoose= require("mongoose");


const emploishéma=mongoose.Schema({

    
    poste:{ type: String, required:true},
    entreprise:{ type: String, required:true},
    adresse:{ type: String, required:true},
    typeemploi:{ type: String, required:true},
    salaire:{ type: String, required:true},
    description:{ type: String, required:true},
    responsabilité:{ type: String, required:true},
    prérequis:{ type: String, required:true}
    
 });
 
 module.exports=mongoose.model('Emploi',emploishéma);