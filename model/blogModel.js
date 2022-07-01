const mongoose = require('mongoose')

const BlogPostModel = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    image: {
        type: 'string',
        required: true,
    },
    descr: {
        type: 'string',
        required: true,
    }
})

module.exports = mongoose.model('BlogPost', BlogPostModel)