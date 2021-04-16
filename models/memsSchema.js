var mongoose = require("mongoose")
var Schema = mongoose.Schema


const memsSchema = new Schema({
    title: {
        type: String,
        required: 'Title cant be empty'
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tags'
    }],
    link: {
        type: String,
        required: 'Url cant be empty'
    },
    reactions: [{icon: String, count: Number}]
})

memsSchema.path('link').validate((val) => {
    const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*\.(gif|jpg|jpeg|tiff|png))?/
    return urlRegex.test(val)
}, 'valid URL')

memsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('mems', memsSchema, 'mems')