const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');


module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        return res.status(200).json({ coordinates });
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        return res.status(404).json({ message: 'Coordinates not found' });
    }
};

module.exports.getDistanceTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    
    if (!origin || !destination) {
        return res.status(400).json({ message: 'Both origin and destination are required' });
    }

    try {
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        return res.status(200).json(distanceTime);
    } catch (error) {
        console.error('Error fetching distance and time:', error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
   try {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()})
      }
      const { input } = req.query;
      const suggestions = await mapService.getAutoCompleteSuggestions(input);
      res.status(200).json(suggestions);
   } catch (error) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error'})
   }
}