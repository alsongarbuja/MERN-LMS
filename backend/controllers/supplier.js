
const Supplier = require('../models/supplier')
const { StatusCodes } = require('http-status-codes')

const getAllSuppliers = async (req, res) => {
    const suppliers = await Supplier.find({}).sort('-createdAt')
    res.status(StatusCodes.OK).json({ suppliers, suppliersCount: suppliers.length })
}

const getSupplier = async (req, res) => {
    const supplier = await Supplier.findById({ _id: req.params.id })
    res.status(StatusCodes.OK).json({ supplier })
}

const addSupplier = async (req, res) => {
    await Supplier.create(req.body)
    res.status(StatusCodes.CREATED).json('Supplier Added Successfully')
}

const updateSupplier = async (req, res) => {
    await Supplier.findByIdAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true,
        runValidators: true
    })
    res.status(StatusCodes.OK).json('Supplier Updated Successfully')
}

const deleteSupplier = async (req, res) => {
    await Supplier.findByIdAndRemove({ _id: req.params.id })
    res.status(StatusCodes.OK).json('Supplier Deleted Successfully')
}

module.exports = {
    getAllSuppliers,
    getSupplier,
    addSupplier,
    updateSupplier,
    deleteSupplier
}