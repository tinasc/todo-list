import React,{useState} from 'react';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
       <TodoForm/>
      </header>
    </div>
  );
}

export default App;
