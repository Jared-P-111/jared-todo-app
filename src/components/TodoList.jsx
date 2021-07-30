//
//
//
import React from 'react';
import Todo from '../components/Todo';

const TodoList = ({ todos, setTodos, filteredTodos, setInputText }) => {
  return (
    <div className="todo-list">
      <ul>
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            setInputText={setInputText}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
