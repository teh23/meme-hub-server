var mongoose = require("mongoose")
var Schema = mongoose.Schema

var tagsSchema = new Schema({
   title: String,
   data: Date,
})

tagsSchema.set('toJSON',{
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
   }
})


module.exports = mongoose.model('tags', tagsSchema, 'tags')