const express = require('express');
const router = express.Router();

const user_controller = require('../controller/userController');
const exercise_controller = require('../controller/exercisesController');

router.get('/users/:id/logs', user_controller.get_logs);
router.post('/users', user_controller.post_create_user);
router.post('/users/:id/exercises', exercise_controller.post_create_exercise);
