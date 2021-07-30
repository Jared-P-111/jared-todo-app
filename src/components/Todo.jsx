//
//
//
import React from 'react';
import '../styles.css';

const Todo = ({ text, todo, todos, setTodos, setInputText }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const editHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    setInputText(text);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'line-through' : ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="edit-btn" onClick={editHandler}>
        <i className="fas fa-pencil-alt"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
