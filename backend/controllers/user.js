const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')

const login = async (req, res) => {

}

const register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body

    if(password !== confirmPassword){
        return
    }

    const user = await User.create({username, email, password})
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({user: {username: user.username}, token})
}

const showUserDetail = async (req, res) => {
    const user = await User.findById({ _id: req.params.id })
    res.status(StatusCodes.OK).json({user})
}

const deleteUser = async (req, res) => {
    await User.findOneAndRemove({ _id: req.params.id })
    res.status(StatusCodes.OK).json("Deleted Successfully")
}

const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.status(StatusCodes.OK).json({users, count: users.lenght})
}

module.exports = {
    login,
    register,
    showUserDetail,
    deleteUser,
    getAllUsers
}