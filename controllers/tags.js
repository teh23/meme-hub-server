const memsModel = require('../models/memsSchema.js')
const userModel = require('../models/userSchema.js')
const tagsModel = require('../models/tagsSchema.js')



exports.index = (req, res) =>{
    tagsModel.find({}).then((doc) =>{
        res.send(doc)
    })

}

exports.add = (req, res) =>{
    // const body = req.body
    const tag = new tagsModel({
        title: "papaj",
        date: "10.04.2022 12:12:12"
    })

    tag.save().then(doc => console.log(doc))
    res.send('add')
}
exports.edit = (req, res) =>{
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
exports.delete=  (req, res) =>{
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
exports.getByTitle =  (req, res) =>{
    // const body = req.body

    // const newMem = new memsModel(body)

    // try{
    //     await newMem.save()
 
    //     res.status(200).json(newMem)
    // }catch(e){
    //     res.status(409).json({error: e.message})

    // }
    res.send('/id')
}