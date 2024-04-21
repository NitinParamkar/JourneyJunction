const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required: true            //remember passport-local-mongoose will by default create fields for username and password
    }
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);