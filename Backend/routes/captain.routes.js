const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userModel = require('../models/user.model');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
body('fullname.firstname').isLength({min: 3}).withMessage('Firstname must be at least 3 characters long'),
body('fullname.lastname').isLength({min: 3}).withMessage('Lastname must be at least 3 characters long'),
body('email').isEmail().withMessage('Please enter a valid email'),
body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
body('vechile.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
body('vechile.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
body('vechile.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vechile type must be one of car, motorcycle, auto')

],
 captainController.registerCaptain
)

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
captainController.loginCaptain
)


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;