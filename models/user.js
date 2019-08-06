const mongoose        = require("mongoose"),
passportLocalMongoose = require("passport-local-mongoose");

//Define user schema
const UserSchema = new mongoose.Schema({
    usermane: String,
    passport: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);