var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let rosaryModel = require('../model/Rosary');

module.exports.displayJoyfulList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Joyful'},(error,joyfulList) =>{

        if(error){
            return console.log(error);
        }else{
            response.json({success:true,msg:'Joyful List'});
        }


    });

}

module.exports.displaySorrofulList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Sorrowful'},(error,joyfulList) =>{

        if(error){
            return console.log(error);
        }else{
            response.json({success:true,msg:'Joyful List'});
        }


    });
}

module.exports.displayGloriousList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Glorious'},(error,joyfulList) =>{

        if(error){
            return console.log(error);
        }else{
            response.json({success:true,msg:'Joyful List'});
        }


    });
}

module.exports.displayLuminousList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Luminous'},(error,joyfulList) =>{

        if(error){
            return console.log(error);
        }else{
            response.json({success:true,msg:'Joyful List'});
        }


    });
}