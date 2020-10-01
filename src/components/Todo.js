import React from 'react';

function Todo({todo}) {
    return (
        <div className="todo-checkbox">
            <input type="checkbox"/>
                {todo.task}
            <button>X</button>
        </div>
    );
}

export default Todo;
