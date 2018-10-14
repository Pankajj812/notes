const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:"First Name Can\'t be empty"
    },
    lastName: {
        type: String,
        required:"Last Name Can\'t be empty"
    },
    phoneNumber: {
        type: String,
        required:"Phone Number Can\'t be empty"
    },
    email: {
        type: String,
        required:"Email Can\'t be empty",
        unique:true
 },
    password: {
        type: String,
        required:"Password Can\'t be empty",
        minlength:[8,"Password must be 8 chars long"]

    },
    saltSecret: String

});
userSchema.pre('save', function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    })
})

mongoose.model('userRegistration',userSchema)