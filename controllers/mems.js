var memsModel = require('../models/memsSchema.js')
var userModel = require('../models/userSchema.js')
exports.index = (req, res) =>{
    memsModel.find({}).then((doc) =>{
        res.send(doc)
    })

}

exports.addMem = (req, res) =>{
    // const body = req.body


    const mem = new memsModel({
        title: "Nowy",
        tags: ["asd", "test"],
        link: "htt://localhost.pl",
        reactions: [{icon: ":)", count: 2}]
    })
    mem.save().then((res)=>{
        console.log(res)
    })

    res.send('/post')
}
exports.editMem = (req, res) =>{
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
exports.deleteMem =  (req, res) =>{
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
exports.getByIdMem =  (req, res) =>{
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