const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/apiController');

router.get('/users/:id/logs', api_controller.get_logs);
router.post('/users', api_controller.post_create_user);
router.post('/users/:id/exercises', api_controller.post_create_exercise);
