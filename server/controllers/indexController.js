var express = require('express');
var router = express.Router();

var passport = require('passport');
var userModel = require('../model/User');

var jwt = require('jsonwebToken');
var DB = require('../config/db');


//PLEASE MAKE NOTES ON THIS PAGE


module.exports.processLoginPage = (request,response,next) =>{
    passport.authenticate('local',
        (error,user,info) =>{

            if(error){
                return next(error);
            }

            if(!user){
                return response.json({success:false,msg:'Failed to log in',user: user});
            }

            request.logIn(user, (err) =>{

                if(err){
                    return next(err);
                }

                const payload ={
                    id: user._id,
                    username: user.username,
                    email: user.email
                }

                const authToken = jwt.sign(payload, DB.secret,{
                    expiresIn: 604800
                });

                return response.json({success: true, msg:'User logged in Successfully',
                    user:{
                        id: user._id,
                        username: user.username,
                        email: user.email
                    },token: authToken});

            });

        })(request,response,next);
}



module.exports.processRegisterPage = (request,response,next) =>{
    var newUser = new userModel.User({
        username: request.body.username,
        email: request.body.email
    });


    userModel.User.register(
        newUser,
        request.body.password,
        (error) =>{

            if(error){

                console.log('Error: Inserting New User');

                if(error.name == "UserExistsError"){
                    console.log('Registration Error: User Already Exists');
                }

                return response.json({success: false,msg: 'Failed to Log in'});
            }

            return response.json({success: true,msg: 'User registred Successfully!'});
        });

}

module.exports.performLogout = (request,response,next) => {
    request.logout();
    return response.json({success: true,msg: 'User Logout Successfully!'});
}