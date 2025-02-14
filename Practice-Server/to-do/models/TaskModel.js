const mongoose = require('mongoose');
const UserModel = require('./UserModel');

const TaskModel = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'todo-User',
        required: true
    },
    task: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
}, {
    timestamp: {
        type: Date,
        default: Date.now
    }
});

TaskModel.methods.changeStatus = async function () {
    const task = this;
    task.status = task.status === 'pending' ? 'completed' : 'pending';
    return task.save();
};

module.exports = mongoose.model('todo-Task', TaskModel);


