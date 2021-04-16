const memsModel = require('../models/memsSchema.js')
const userModel = require('../models/userSchema.js')
const tagsModel = require('../models/tagsSchema.js')


exports.index = (req, res) => {
    tagsModel.find({}).then((doc) => {
        res.status(200).send(doc)
    })

}

exports.add = (req, res) => {
    console.log("title")
    const tag = new tagsModel({
        title: req.body.title,
        data: new Date()
    })

    tag.save().then(doc => res.send(doc))

}
exports.edit = (req, res) => {
    // const body = req.body

    // const newMem = new memsModel(body)

    // try{
    //     await newMem.save()

    //     res.status(200).json(newMem)
    // }catch(e){
    //     res.status(409).json({error: e.message})

    // }
    res.send('/post')
}
exports.delete = (req, res) => {
    // const body = req.body

    // const newMem = new memsModel(body)

    // try{
    //     await newMem.save()

    //     res.status(200).json(newMem)
    // }catch(e){
    //     res.status(409).json({error: e.message})

    // }
    res.send('/post')
}
exports.getByTitle = (req, res) => {
    const title = req.params.title
    tagsModel.find({"title": title}, (err, doc) => {
        res.status(200).send(doc)
    })
    console.log("tutaj")
}
exports.getById = (req, res) => {
    const id = req.params.id
    tagsModel.findOne({"_id": id}, (err, doc) => {
        res.status(200).send(doc)
    })

}