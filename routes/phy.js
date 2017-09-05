var express = require('express');
var router = express.Router();
//import the phy model
var PhyModel = require("../models/Physicians");
var fname;
var mname;
var lname;
/* GET home page. */
router.get('/', function(req, res, next) {
    //extract fname, mname, lname from request parameters
    fname =(req.query.fname === undefined) ? "" : req.query.fname;
    mname =(req.query.mname === undefined) ? "" : req.query.mname;
    lname =(req.query.lname === undefined) ? "" : req.query.lname;

    //call respective PhyModel method()
    if(mname ==="" & lname ===""){
        PhyModel.getPhysicianByFname(req.query.fname, function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    }
    else if (mname ===""){
        PhyModel.getPhysicianByFnameLname(req.query.fname, req.query.lname, function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        });
    }
    else if(lname ===""){
        PhyModel.getPhysicianByFnameMname(req.query.fname,req.query.mname, function(err, result){
            if(err){
                throw err;
            }
            res.json(result);
        });
    }
    else{
         PhyModel.getPhysicianByFnameMnameLname(req.query.fname,req.query.mname,req.query.lname, function(err, result){
             if(err){
                 throw err;
             }
             res.json(result);
         });
    }
});
module.exports = router;
