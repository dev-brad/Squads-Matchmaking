const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

// Get user profile if user is authenticated 
router.get('/', profileController.get_user_profile);

router.post('/', profileController.get_user_profile);

router.get('/match', profileController.get_match_profile);

router.post('/match', profileController.post_friend_request);

module.exports = router;