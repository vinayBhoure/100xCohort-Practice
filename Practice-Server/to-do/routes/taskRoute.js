const express = require('express');
const verifyUser = require('../middleware/verifyUser');
const { deleteTask, getAllTasks, createTask, updateTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/add-task', verifyUser, createTask);
router.get('/get-all-task', verifyUser, getAllTasks);
router.delete('/delete-task/:id',verifyUser ,deleteTask);
router.put('/update-task/:id', verifyUser, updateTask);

module.exports = router;