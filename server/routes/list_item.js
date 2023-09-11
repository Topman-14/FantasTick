const express = require('express')

const Item = require('../models/itemModel')

const {
    createItem,
    getItems,
    getItem,
    deleteItem,
    updateItem
        } = require('../controllers/itemController');

const requireAuth = require('../middleware/requireauth')


const router = express.Router();

router.use(requireAuth)

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', createItem);

router.delete('/:id', deleteItem);


router.patch('/:id', updateItem);

module.exports = router;