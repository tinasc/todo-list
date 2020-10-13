import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
      });

      function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
      }
      function handleSubmit(e) {
        e.preventDefault(); 
        if (todo.task.trim()) {    
          addTodo({ ...todo, id: uuidv4() });      
          setTodo({ ...todo, task: "" });
        }
      }
    
    
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            label="Task"
            type="text"
            name="task"
            placeholder="Enter task"
            value={todo.task}
            onChange={handleTaskInputChange}
          />
          <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;
