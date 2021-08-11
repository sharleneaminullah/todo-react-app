const Todo = require("../models/Todo");

exports.getTodo = (req, res) => {
  return res.json(req.todo);
};

exports.getAllTodos = (req, res) => {
  Todo.find()
    .sort("-createdAt")
    .exec((err, todos) => {
      if (err || !todos) {
        return res.status(400).json({
          error: "Error in finding all todos",
        });
      }
      res.json(todos);
    });
};

exports.getTodoById = (req, res, next, id) => {
  Todo.findById(id).exec((err, todo) => {
    if (err || !todo) {
      return res.status(400).json({
        error: "404 todo not found",
      });
    }
    req.todo = todo;
    next();
  });
};

exports.createTodo = (req, res) => {
  const todo = new Todo(req.body);

  todo.save((err, title) => {
    if (err || !title) {
      return res.status(400).json({
        error: "Error while creating a todo",
      });
    }
    res.json({ title: title });
  });
};

exports.updateTodo = (req, res) => {
  const todo = req.todo;
  todo.task = req.body.title;

  todo.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: "Error while updating",
      });
    }
    res.json(t);
  });
};

exports.deleteTodo = (req, res) => {
  const todo = req.todo;
  todo.remove((err, title) => {
    if (err || !title) {
      return res.status(400).json({
        error: "Error in deleting a task",
      });
    }
    res.json({
      title_deleted: title,
      message: "Todo deleted successfully!",
    });
  });
};
