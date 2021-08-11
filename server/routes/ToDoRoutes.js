const express = require("express");
const router = express.Router();

/* ToDo Backend API*/

const {
  getAllTodos,
  getTodo,
  getTodoById,  
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/Todo");

// triggers the callback function whenever user routes to the id parameter. 
router.param("id", getTodoById);

//api routes to call
router.get("/todos/", getAllTodos);
router.get("/todo/:id/", getTodo);
router.post("/todo/create/", createTodo);
router.put("/todo/:id/update", updateTodo);
router.delete("/todo/:id/delete", deleteTodo);

module.exports = router;
