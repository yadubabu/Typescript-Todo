import React,{useState} from 'react';
import { Todo } from './models';
import './App.css';

import InputField from './components/InputField';
import TodoList from './components/TodoList';

const App=() =>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([])
  
  const addTodo=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo('');
    }
  }
  console.log(todos);
  
  return (
    <div className="App">
      <h1 className='title'>Taskfy</h1>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
