let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = mongoose.Schema({
    username:{
        type:String,
        default: '',
        trim: true,
        required: 'username is required'
    },
    //Password will be encrypted by passport local mongoose.
    email:{
        type: String,
        default: '',
        trim: true,
        required: 'email is required'
    }
    
    },{
        collection: "PassportUsers"
    });

//Configure Options for the UserSchema
var options = ({
    missingPasswordError: "wrong / Missing Password"
});

//Allowing passort to plugin to the mongoose database and get users.
UserSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('',UserSchema);

