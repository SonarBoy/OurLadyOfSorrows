var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var userModel = require('../model/User');

module.exports.displayUserList = (request,response,next) =>{
    
    userModel.User.find((error,userList) =>{

        if(error){
            return console.error(error);
        }else{
            response.json({success:true, msg:"User Found",userList: userList});
        }
    });

    //MONGOOSE NOTES:
    /*
     Params:
        filter
        projections: optional fields to return.
        options: optional see.
        callback: function.

        MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
        Returns all documents that match the specified criteria.
    */
}

module.exports.addUserPost = (request,response, next) => {
    var newUser = new userModel.User({
        username: request.body.username,
        email:request.body.email
    });

    userModel.User.register(
        newUser,
        request.body.password,
        (error) =>{

            if(error){
                console.log('Error: Inserting New User');
                console.log(error);

                if(error.name == "UserExistsError"){
                    console.log('Registration Error: User Already Exists');
                }

                return error;

            }else{

                response.json({success:true,msg:"Successfully added user!"})

            }
    });


    //PASSPORT-LOCAL-MONGOOSE:
    /* .register
    Convenience method to register a new user instance with a given password.
    */
}

module.exports.deleteUser = (request,response,next) => {

    let id = request.params.id;

    userModel.User.deleteOne({_id:id},(error) =>{

        if(error){
            console.log(error);
        }else{
            response.json({success:true ,msg:"Successfully deleted user!"});
        }

    });

    //MONGOOSE NOTES:
    /* .deleteOne
    Deletes the first document that matches conditions from the collection.
    Behaves like remove(), but deletes at most one document regardless of the 
    single option.
    */

}

