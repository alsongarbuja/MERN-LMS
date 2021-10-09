
const {
    getAllBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/book')
const router = require('express').Router()

router.route('/').get(getAllBooks).post(addBook)
router.route('/:id').get(getBook).delete(deleteBook).patch(updateBook)

module.exports = router