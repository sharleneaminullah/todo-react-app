import React, { useEffect } from "react";
import "./form.css";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Form = ({
  title,
  setTitle,
  description,
  setDescription,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  dueDate,
  setDueDate,
}) => {
  const updateTodo = (title, description, dueDate, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, description, dueDate, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setDueDate(moment(editTodo.dueDate).toDate());
    } else {
      setTitle("");
      setDescription("");
      setDueDate(new Date());
    }
  }, [setTitle, setDescription, setDueDate, editTodo]);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onDueDateChange = (date) => {
    setDueDate(date);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: title,
          description: description,
          dueDate: JSON.parse(JSON.stringify(dueDate)),
          completed: false,
        },
      ]);
      setTitle("");
      setDescription("");
      setDueDate(new Date());
    } else {
      updateTodo(title, description, dueDate, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a ToDo..."
        className="task-title"
        value={title}
        required
        onChange={onTitleChange}
        data-testid="title-input"
        maxLength="20"
      />
      <input
        type="text"
        placeholder="Description..."
        className="task-description"
        value={description}
        onChange={onDescriptionChange}
        maxLength="80"
      />
      <DatePicker
        className="datePicker"
        selected={dueDate}
        onChange={onDueDateChange}
        name="dueDate"
        dateFormat="yyyy-MM-dd"
      />
      <button type="submit" className="button-add">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
