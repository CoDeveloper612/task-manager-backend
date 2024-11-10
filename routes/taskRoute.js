const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/remove/:id', taskController.deleteTask);
router.put('/completed/:id', taskController.updateCompeted);

module.exports = router;