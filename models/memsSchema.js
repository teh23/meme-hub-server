var mongoose = require("mongoose")
var Schema = mongoose.Schema

const memsSchema = new Schema({
    title: String,
    author: {type: Schema.Types.ObjectId, ref: 'users'},
    tags: [String],
    link: String,
    reactions: [{icon: String, count: Number}]
})


memsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('mems', memsSchema, 'mems')