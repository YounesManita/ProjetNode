console.clear();

const User=require("../Models/UserModels")

const dotenv=require('dotenv')
dotenv.config()

const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL,
            
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log('database connect')



        const email =("younesmanita975@gmail.com".toLocaleLowerCase()).trim()

        let webmaster = await User.findOne({
            Role: 'admin',
        });

        if (!webmaster) {
            let password = 'adminpassword'
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);
            let new_user = new User({
                
                
                nom: 'younes',
                prenom: 'manita',

                email: 'younesmanita975@gmail.com',
                Numerotelephone:"96289993",
            
                password: hashed,
                Role: 'admin',
            });
            await new_user.save();
            console.log(`webmaster account has been added : ${new_user.email}`);
        } else {
            console.log(` webmaster account already exist \n webmaster email : ${webmaster.email}`);
        }
    } catch (error) {
        console.log(error)
        console.log("database is not connect");
    }
};

module.exports = connectDB;