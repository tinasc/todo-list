import React,{useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        Todo app
       <TodoForm addTodo={addTodo}/>
       <TodoList todos={todos}/>
      </header>
    </div>
  );
}

export default App;
