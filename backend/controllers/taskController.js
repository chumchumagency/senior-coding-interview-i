const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, priority  } = req.body;
  const task = new Task({ title, description, priority , user: req.user.id });
  await task.save();
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};
