var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let longSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    task:{
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    }
    });

var Lonn = mongoose.model('long_lat', longSchema);
module.exports = Lonn;
