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
            <input type="checkbox" checked={todo.completed} onClick={handleCheckboxClick} />
            <div style={{
                color: "grey",
                textDecoration: todo.completed ? "line-through" : null
                  }}>
            <div className="todo-align">
                {todo.task}
                </div>
            </div>
            <div className="todo-align">
               <i onClick={handleRemoveClick} className='fa fa-trash'></i>
           </div>
      </div>
    );
}

export default Todo;
