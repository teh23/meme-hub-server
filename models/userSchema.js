var mongoose = require("mongoose")
var Schema = mongoose.Schema

var userSchema = new Schema({
    login : String,
    stories : [{type: Schema.Types.ObjectId, ref: 'mems'}]

})


module.exports = mongoose.model('users', userSchema, 'users')