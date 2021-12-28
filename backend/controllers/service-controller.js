const serviceModel = require("../models/service-model");
const mongoose=require("mongoose")

const ser= async (req,res)=>{
    //const thingObject = JSON.parse(req.body.se)
    
    if(req.file ){
        console.log(req.file)
   const se=new serviceModel({
    nmservice:req.body.nmservice,
    //dt:{prix:req.body.dt.pe,jour:req.body.dt.jr},
    categorie:req.body.categorie,
    description:req.body.description,
    nvexp:req.body.nvexp,
    tgser:req.body.tgser,
    aut:req.body.aut,
    //date:req.body.date, //...thingObject,
    doc: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`});
        
     se.save().then((resp)=>{
                   res.status(200).json({url: resp.doc})
                   console.log("service ajouter avec success") 
     }).catch((err)=>{
         console.log(err)
     });
         
       }else{ //console.log(req.body)
        // console.log(req.body.dt.pe);
        const se=new serviceModel({
            nmservice:req.body.nmservice,
            dt:{prix:req.body.dt.pe,jour:req.body.dt.jr},
            categorie:req.body.categorie,
            description:req.body.description,
            nvexp:req.body.nvexp, 
            tgser:req.body.tgser,
            aut:req.body.aut,
           date:req.body.date});
                
             se.save().then((resp)=>{
                           res.status(200).json({})
                           console.log("ajouter avec success mais sans fille")
             }).catch((err)=>{
                 console.log(err)
             });
       }

}
  /*
    const ad=(req,res)=>{
        
        let bb=mongoose.Types.ObjectId(req.body.)
        serviceModel.findById(bb)
    }   */

    const show=(req,res)=>{
       console.log(req.body.aut)
         serviceModel.find({aut:req.body.aut}).then(resp=>{
               res.status(200).json({resp
                /* id:resp._id,  
                 aut:resp.aut,
                 intro:resp.nmservice,
                 prix:resp.dt.prix,
                 img:resp.doc */ 
               })
         }).catch(err=>{
            res.status(400).json({err:err})
         })
         
    }

    const showdetaiilservice=(req,res)=>{
       // console.log(req.params['id'])
       /* objectid=mongoose..ObjectId
       id = new objectid(req.params.id)
       console.log(id+' is' )*/
        //console.log(req.params)
        console.log(req.query.id)
           serviceModel.findById(req.query.id).then(resp=>{
             if(!resp){console.log('not found')}
              res.status(200).json({
                 resp })
              console.log('objet trouvé')
           }).catch(err=>{ res.status(400).json({err:err})})
    } 

    const sup=(req,res)=>{
       
         serviceModel.findByIdAndDelete(req.query.id).then(resp=>{
              res.status(200).json({nm:resp.nmservice})
         }).catch(err=>{
           res.status(400).json({err:err})
         })
       
    }

module.exports={ser,show,showdetaiilservice,sup};