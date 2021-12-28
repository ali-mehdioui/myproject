const User= require('../models/user-model');
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');


const addUsers=(req, res)=>{
	delete req.body._id;
	bcrypt.hash(req.body.password, 10).then(hach=>{
        const use= new User({
			//...req.body,
			  email:req.body.émail,
			   password: hach
			 });
			 //console.log(req.body);
			 use.save().then(()=>{console.log("succes") })
			 .catch((err)=>{ console.log("errer c "+err)});
		 
		
	}).catch(err=>{console.log("no execute bvrypt")})
	
    
   //return res.json("liste des utilisateurs qui n'ont pas payés");

}

const auth=(req,res)=>{

   delete req.body._id;
   
   User.findOne({email:req.body.émail } ).then((resp)=>{

	   if(!resp){console.log("cette adresse mail n'existe pas")
	   return res.status(200) .json({err:true  })   }
	   else{ 
		bcrypt.compare(req.body.password, resp.password)
        .then(valid => {
          if (!valid) {
			  //console.log("mot de pass incorect")
             return res.status(200) .json({ err:true });
			
          }
          res.status(200).json({
            userId: resp._id,
            token: jwt.sign(
				{ userId: resp._id },
				'RANDOM_TOKEN_SECRET',
				{ expiresIn: '24h' }
			  ),
			  email : resp.email
          });
		  //console.log("connexion reussi")
        })
        .catch(error =>{ //console.log("erreur")
			         res.status(200).json({err:true })
	               })
    }
         }).catch((err)=>{console.log("aucune autentification")})
		   
		   

   
}


module.exports = {
	addUsers,auth};