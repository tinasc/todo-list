import React, {useState} from 'react';


function TodoForm(addForm) {
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
          setTodo({ ...todo, task: "" });
        }
      }
    
    
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            label="Task"
            type="text"
            name="task"
            value={todo.task}
            onChange={handleTaskInputChange}
          />
          <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;
