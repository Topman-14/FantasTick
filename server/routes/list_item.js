const express = require('express')

const Item = require('../models/itemModel')

const {
    createItem,
    getItems,
    getItem,
        } = require('../controllers/itemController');


const router = express.Router();

// GET all items
router.get('/', getItems);

// GET a single item
router.get('/:id', getItem);

// POST an item
router.post('/', createItem);

// DELETE an item
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'DELETE an item'})
});

// UPDATE an item
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'UPDATE an item'})
});

module.exports = router;