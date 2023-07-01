import React from 'react';
import { Todo } from '../models';
import '../../src/style.css';
import TodoCard from './TodoCard';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div>
        {todos.map(t=><TodoCard todo={t} todos={todos} setTodos={setTodos}/>)}
    </div>
  )
}

export default TodoList