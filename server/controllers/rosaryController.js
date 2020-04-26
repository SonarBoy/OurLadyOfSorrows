var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let rosaryModel = require('../model/Rosary');

module.exports.displayJoyfulList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Joyful'},(error,joyfulList) =>{

        if(error){
            console.log(error);
            let jsonData = require('./joyful.json');
            joyfulList = jsonData;
            response.json({success:true,msg:'Joyful List',joyfulList});
        }else{
            response.json({success:true,msg:'Joyful List',joyfulList});
        }


    });

}

module.exports.displaySorrofulList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Sorrowful'},(error,sorrowfulList) =>{

        if(error){
            return console.log(error);
        }else{
            response.json({success:true,msg:'Sorrowful List',sorrowfulList});
        }


    });
}

module.exports.displayGloriousList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Glorious'},(error,gloriousList) =>{

        if(error){
            return console.log(error);
        }else{
            response.json({success:true,msg:'Glorious List',gloriousList});
        }


    });
}

module.exports.displayLuminousList = (request,response,next) =>{
    rosaryModel.find({'MysteryType':'Luminous'},(error,luminousList) =>{

        if(error){
            return console.log(error);
        }else{
            response.json({success:true,msg:'Luminous List',luminousList});
        }


    });
}