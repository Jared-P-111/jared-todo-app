//
//
//
import React, { useState, useEffect } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../styles.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className="body">
      <div className="content-container">
        <h1 className="header">Jared's Todos</h1>
        <div className="input-container">
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
          />
        </div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          setInputText={setInputText}
        />
      </div>
    </div>
  );
};

export default App;
