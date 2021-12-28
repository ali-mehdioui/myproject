const Emploi=require('../models/emploi-model');


const listemploi=(req,res)=>{
    delete req.body._id;
     
     Emploi.find({$or:[{poste: req.body.poste },{ adresse:req.body.adresse }]}).then(resp=>{
             

          
           //console.log(resp.poste+" son salaire est "+resp.salaire) 
           res.status(201).json(resp);
           //console.log(resp);
           
      }).catch(err=>{
          console.log(err);
      }); 

    /* Emploi.find({$or:[{poste: req.body.poste },{ adresse:req.body.adresse }]},function(err, result) {
        if (err) throw err;
        else console.log(result.poste);
        
      }); */
      

}

const detailemploi=(req,res)=>{
  //delete req.body._id;
   Emploi.find({$and:[{poste:req.body.poste},{adresse:req.body.adresse},
    {typeemploi:req.body.typeemploi},{salaire:req.body.salaire},{description:req.body.description},
     {entreprise:req.body.entreprise},{prerequis:req.body.prerequis},{responsabilte:req.body.responsabilte}]})
     .then(result=>{
     res.status(200).json(result)
     //console.log(result)
     //console.log("ceci envoyé par le clieent "+req.body.poste+"")
   }

   ).catch(err=>{
     console.log(err)
   }

   )
}

const titreposte=(req,res)=>{
    const t=req.body.poste
    
      
    
  Emploi.find({poste:{$regex: new RegExp('^'+t ,"i")}}).then(result=>{
         // console.log(result)
      // console.log(req.body.poste)
      if (t=='') {
        res.status(500).json(result)
        //console.log("voici la reponse",+res)
      } else {
       res.status(200).json(result) }
  }).catch(err=>{
        console.log(err)
  })
    
}

module.exports={listemploi,detailemploi,titreposte};

//$or:[{poste: req.body.poste },{ adresse:req.body.adresse }], find({poste:{$regex: /^d/i}})