const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    
    const { title, description, priority } = req.body;
    const task = new Task({ title, description, user: req.user.id, priority });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json(err.message)
  }
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};
