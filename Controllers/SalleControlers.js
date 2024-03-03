const Salle=require("../Models/SaleModels")

exports.AddSalle=async(req,res)=>{
    try {
        const existesalle=await Salle.findOne({nom:req.body.nom})
        if(existesalle){
            res.status(401).json("sale d'eja existe")
        }else{
            const new_salle=new Salle(req.body)
            await new_salle.save()
            res.status(201).json('ajoute avec succes')
        }
    } catch (error) {
      
        res.status(400).json("Erreur de serveur",error)
        
    }
}
