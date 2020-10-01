import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
      toggleComplete(todo.id);
    }
  
    function handleRemoveClick() {
      removeTodo(todo.id);
    }
    return (
        <div className="todo-checkbox">
            <input type="checkbox" checked={todo.completed} onClick={handleCheckboxClick}/>
            <div style={{
                color: "white",
                textDecoration: todo.completed ? "line-through" : null
                  }}>
                {todo.task}
            </div>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Todo;
