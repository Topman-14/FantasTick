const mongoose = require('mongoose');

const Schema = mongoose.Schema

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    ischecked: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Item', itemSchema)
