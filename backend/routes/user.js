const router = require('express').Router()

const {
    login,
    register,
    showUserDetail,
    deleteUser,
    getAllUsers
} = require('../controllers/user')

router.route('/').get(getAllUsers)
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/:id').get(showUserDetail).delete(deleteUser)

module.exports = router