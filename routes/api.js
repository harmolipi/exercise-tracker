const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');
const exercise_controller = require('../controllers/exerciseController');

router.get('/users/:_id/logs', user_controller.get_logs);
router.post('/users/:_id/exercises', exercise_controller.post_create_exercise);
router.get('/users', user_controller.get_users);
router.post('/users', user_controller.post_create_user);

module.exports = router;
