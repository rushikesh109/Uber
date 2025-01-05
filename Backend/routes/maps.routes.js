const express = require('express');
const { query } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controller');
 

const router = express.Router(); 


router.get(
    '/get-coordinates',
    query('address').isString().isLength({ min: 3 }).withMessage('Address must be at least 3 characters long'),
    authMiddleware.authUser, mapController.getCoordinates 
);

router.get('/get-distance-time',
    query('origin').isString().isLength({ min:3 }),
    query('destination').isString().isLength({ min:3}),
    authMiddleware.authUser,
    mapController.getDistanceTime

)


router.get('/get-suggestions', 
    query('input').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestions
)


module.exports = router; 