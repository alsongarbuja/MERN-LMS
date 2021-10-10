
const {
    getAllSuppliers,
    getSupplier,
    addSupplier,
    updateSupplier,
    deleteSupplier
} = require('../controllers/supplier')
const router = require('express').Router()

router.route('/').get(getAllSuppliers).post(addSupplier)
router.route('/:id').get(getSupplier).delete(deleteSupplier).patch(updateSupplier)

module.exports = router