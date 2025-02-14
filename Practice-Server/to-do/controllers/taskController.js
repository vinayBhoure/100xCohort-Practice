const asyncError = require('../middleware/asyncError');
const TaskModel = require('../models/TaskModel');

const createTask = asyncError(async (req, res) => {
    const { task } = req.body;
});

const getAllTasks = asyncError(async (req, res) => {});

const getCompletedTask = asyncError(async (req, res) => {});

const getPendingTask = asyncError(async (req, res) => {});

const updateTask = asyncError(async (req, res) => {});

const deleteTask = asyncError(async (req, res) => {});

module.exports = {
    createTask,
    getAllTasks,
    getCompletedTask,
    getPendingTask,
    updateTask,
    deleteTask
};