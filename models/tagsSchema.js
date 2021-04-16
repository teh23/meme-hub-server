const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tagsSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   data: {
      type: Date,
      required: true
   }
})

tagsSchema.set('toJSON',{
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
   }
})


module.exports = mongoose.model('tags', tagsSchema, 'tags')