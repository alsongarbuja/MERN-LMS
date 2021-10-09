
const Book = require('../models/book')
const { StatusCodes } = require('http-status-codes')

const getAllBooks = async (req, res) => {
    const books = await Book.find({}).sort('-createdAt')
    res.status(StatusCodes.OK).json({ books, bookCounts: books.length })
}

const getBook = async (req, res) => {
    const book = await Book.findById({ _id: req.params.id })
    res.status(StatusCodes.OK).json({ book })
}

const addBook = async (req, res) => {
    await Book.create(req.body)
    res.status(StatusCodes.CREATED).json('Add Book')
}

const updateBook = async (req, res) => {
    await Book.findByIdAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true,
        runValidators: true,
    })
    res.status(StatusCodes.OK).json('Update Book')
}

const deleteBook = async (req, res) => {
    await Book.findOneAndRemove({ _id: req.params.id })
    res.status(StatusCodes.OK).json('Delete Book')
}

module.exports = {
    getAllBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}