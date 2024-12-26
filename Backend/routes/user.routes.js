const express = require('express')
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller')
const authmiddleware = require('../middlewares/auth.middleware')

router.post ('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min:3}).withMessage('Firstname must be atleast 3 characters long'),
    body('password').isLength({ min:6}).withMessage('Password must be 6 characters long')
],
userController.registerUser
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min:6}).withMessage('Password must be 6 characters long')
],  userController.loginUser)

router.get('/profile', authmiddleware.authUser,userController.getProfile)

router.get('/logout', authmiddleware.authUser, userController.logoutUser)

module.exports = router;