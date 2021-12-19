const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MultipleFileSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    files: [Object]   //araay of objects
}, { timestamps: true })


module.exports = mongoose.model('MultipleFiles', MultipleFileSchema)

