import React, { useState, useEffect } from "react";
//import axios from 'axios';
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodosList from "./components/ToDoList/TodosList";
import "./css/App.css";
import {todosData} from './data';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || todosData;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /*useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get("http://localhost:5002");
      console.log('res.data', res.data);
      
      //setTodos(res.data);            
    }
    getTodos();
  }, []); 
   
    const createTodo = async (text) => {
    const res = await axios.post("http://localhost:5001", { title: text });
    setTodos(res.data);
  }
  */

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            dueDate={dueDate}
            setDueDate={setDueDate}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
