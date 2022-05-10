const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    mkdown: {
        type: String,
        required: true
    },
}, {
    collection: 'blogs'
})

module.exports = mongoose.model('blogs', blogSchema)