
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Book name is required' ],
    },
    author: {
        type: String,
        required: [ true, 'Author name is required' ]
    },
    availableNumber: {
        type: Number,
        required: [ true, 'Available number is required' ],
        default: 0,
    },
    genres: {
        type: Array,
    },
    description: {
        type: String,
        required: [ true, 'Description is required' ]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('books', bookSchema)