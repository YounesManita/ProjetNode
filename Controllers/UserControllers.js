const user=require("../Models/UserModels")
const bcrypt=require("bcryptjs")
//add user
exports.Singup=async(req,res)=>{
    try {
        let { nom,prenom,email,password,Numerotelephone }=req.body;
           const existeuser= await user.findOne({email:email})
           if(existeuser){
            res.status(401).json("user already exist")

           }else{
            const salt=await bcrypt.genSalt(10)
            const passwordhash=await bcrypt.hash(password,salt);
const newUser =new user({
    nom: nom, prenom: prenom, email: email, password: passwordhash,Numerotelephone:Numerotelephone
})
        await newUser.save()
 res.status(200).json("user ajouter avec succes ")
           }
        
    } catch (error) {
        console.log(error);
        res.status(400).json("failed  to add user ")
    }
}
