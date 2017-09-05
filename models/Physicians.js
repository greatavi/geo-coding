// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var physicianSchema = new Schema({
    fname: {type : String, required: true},
    mname: String,
    lname: String,
    address: String,
    city: String,
    state: String,
    zipcode: Number
});

// we need to create a model using it
var Physician = mongoose.model('Physician', physicianSchema);

// make this available to our users in our Node applications
module.exports.getSamplePhy = function (callback, limit) {
    Physician.find(callback).limit(limit)
};

module.exports.getPhysicianByFname = function (fname, callback) {
    Physician.find({"fname":fname}, callback);
};
module.exports.getPhysicianByFnameMname = function (fname,mname, callback) {
    Physician.find({"fname": fname, "mname": mname}, callback);
};
module.exports.getPhysicianByFnameLname = function (fname,lname, callback) {
    Physician.find({"fname": fname, "lname": lname}, callback);
};


module.exports.getPhysicianByMname = function (mname, callback) {
    Physician.find({"mname":mname}, callback);
};
module.exports.getPhysicianByFnameMnameLname = function (fname,mname,lname, callback) {
    Physician.find({"fname": fname, "mname": mname, "lname": lname}, callback);

};
