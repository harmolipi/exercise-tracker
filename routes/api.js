const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');
const exercise_controller = require('../controllers/exerciseController');

router.get('/users/:id/logs', user_controller.get_logs);
router.get('/users', user_controller.get_users);
router.post('/users', user_controller.post_create_user);
router.post('/users/:_id/exercises', exercise_controller.post_create_exercise);

module.exports = router;
