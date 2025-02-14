const asyncError = require('../middleware/asyncError');
const TaskModel = require('../models/TaskModel');

const createTask = asyncError(async (req, res) => {
    const { userId, task } = req.body;

    if(!task.title || !task.description) {
        return res.status(400).json({
            message: 'Task title and description are required.'
        });
    }

    const newTask = new TaskModel({
        userId,
        task    
    })

    await newTask.save();
    res.status(400).json({
        success: true,
        message: 'Task created successfully.'
    })
});

const getAllTasks = asyncError(async (req, res) => {
    const { userId } = req.body;
    console.log('User ID: in task', userId);

    const tasks = await TaskModel.find({ userId });
    res.status(200).json({
        success: true,
        tasks
    });
});

const getCompletedTask = asyncError(async (req, res) => {});

const getPendingTask = asyncError(async (req, res) => {});

const updateTask = asyncError(async (req, res) => {});

const deleteTask = asyncError(async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    const task = await TaskModel.findOne({ _id: id.toString() });

    if (!task) {
        return res.status(404).json({
            message: 'Task not found.'
        });
    }

    // Check if the user is the owner of the task
    if (task.userId.toString() !== userId) {
        return res.status(403).json({
            message: 'You are not authorized to delete this task.'
        });
    }

    await TaskModel.deleteOne({ _id: id.toString() });
    res.status(204).json({
        success: true,
        message: 'Task deleted successfully.'
    });
});

module.exports = {
    createTask,
    getAllTasks,
    getCompletedTask,
    getPendingTask,
    updateTask,
    deleteTask
};