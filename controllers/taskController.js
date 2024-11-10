const Task = require('../models/task');

// CREATE Task
exports.createTask = async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const newTask = new Task({ title, description, completed });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE Task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(404).json({ message: 'Task not found' });
    }
};

// DELETE Task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: 'Task not found' });
    }
};

// UPDATE Competed
exports.updateCompeted = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(404).json({ message: 'Task not found' });
    }
};
