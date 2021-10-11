
const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Supplier name is required' ]
    },
    contact : {
        type: Number,
        required: [ true, 'Contact number is required' ],
        maxlength: 10,
        minlength: 10,
    },
    address: {
        type: String,
        required: [ true, 'Address is required' ]
    },
    numberOfBooksProvided: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('suppliers', supplierSchema)