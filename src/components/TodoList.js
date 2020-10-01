import React from 'react'

function TodoList() {
    return (
        <ul>
            {todos.map( todo =>(
                <Todo key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}

export default TodoList;