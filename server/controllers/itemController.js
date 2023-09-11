const Item = require('../models/itemModel')

const mongoose = require('mongoose')

//get all items
const getItems = async (req, res) =>{
    try{
        const user_id = req.user._id
        const items = await Item.find({ user_id }).sort({createdAt: -1})
        res.status(200).json(items)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//get single item
const getItem = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Item baba'})
    }

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
        const user_id = req.user._id
        const item = await Item.create({title, desc, ischecked, user_id})
        res.status(200).json(item)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete item
const deleteItem = async (req, res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Item baba'})
    }

    const item = await Item.findOneAndDelete({_id: id})

    if(!item){
        return res.status(400).json({error: 'No such item'})
    }

    res.status(200).json(item)
}

//update item
const updateItem = async (req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Item baba'})
    }

    const item = await Item.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!item){
        return res.status(400).json({error: 'No such item'})
    }

    res.status(200).json(item)

}


module.exports ={
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
}