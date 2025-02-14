const express = require('express');
const verifyUser = require('../middleware/verifyUser');
const { deleteTask, getAllTasks, createTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/add-task', verifyUser, createTask);
router.get('/get-all-task', verifyUser, getAllTasks);
router.post('/get-completed-task', () => {});
router.post('/get-pending-task', () => {});
router.post('/delete-task/:id',verifyUser ,deleteTask);
router.put('/mark-task/:id', () => {});

module.exports = router;