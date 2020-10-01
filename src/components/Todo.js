import React from 'react';

function Todo({todo}) {
    return (
        <div className="todo-checkbox">
            <input type="checkbox"/>
            <div style={{
                color: "white",
                textDecoration: todo.completed ? "line-through" : null
                  }}>
                {todo.task}
            </div>
            <button>X</button>
        </div>
    );
}

export default Todo;
