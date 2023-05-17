var mongoose = require('mongoose');
var recordSchema = new mongoose.Schema({
    name: String,
    desc: String,
    patiend_id:String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
module.exports = mongoose.model('Record', recordSchema);