const Item = require('../models/itemModel')

//get all items
const getItems = async (req, res) =>{
    try{
        const items = await Item.find({}).sort({createdAt: -1})
        res.status(200).json(items)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//get single item
const getItem = async (req, res) =>{
    const {id} = req.params
    const item = await Item.findById(id)
    if(!item){
        return res.status(404).json({error: 'No such item'})
    }
    res.status(200).json(item)
}
//create new item
const createItem = async (req, res) =>{
    const {title, desc, ischecked} = req.body
    try{
        const item = await Item.create({title, desc, ischecked})
        res.status(200).json(item)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete item

module.exports ={
    createItem,
    getItems,
    getItem,
}