import React, { useState } from 'react';
import { Todo } from '../models';
import '../../src/style.css';
import {AiFillEdit} from 'react-icons/ai';
import { AiFillDelete} from 'react-icons/ai';
import { MdOutlineDownloadDone } from 'react-icons/md';



interface Props{
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoCard :React.FC<Props>= ({todo,todos,setTodos}) => {
    const [edit,setEdit]=useState(todo.todo);
    const [showEdit,setShowEdit]=useState(false);

    const [sty,setSty]=useState({
        textDecoration:'none'
    });
    const deleteTodo=(id:any)=>{
        const delTodo=todos.filter(t=>{
            return id !== t.id;
        });
        setTodos(delTodo);
        
    }
    const doneHandler=(id:any)=>{
      setTodos(todos.map(t=>
        todo.id===id ? {...todo,isDone:!todo.isDone}:todo
      ));
      if(todo.isDone){
        setSty({textDecoration:'line-through'})
      }
    }
   
    const editTodo=(e:any,id:any)=>{
        e.preventDefault();
        setTodos(todos.map(t=>
            todo.id===id ? {...todo,todo:edit}:todo
          ));
        setShowEdit(false)
        
    }
  return (
    <form className='card' onSubmit={(e)=>editTodo(e,todo.id)}>
        {showEdit && !todo.isDone ? (
            <input type='text'
            value={edit}
            onChange={(e)=>setEdit(e.target.value)}
            />
        ):(

            <span className='todos_text' style={sty}>{todo.todo}</span>
        )}
        <div>
            <span className='icon' onClick={()=>setShowEdit(true)}><AiFillEdit/></span>
            <span className='icon' onClick={()=>deleteTodo(todo.id)}><AiFillDelete/></span>
            <span className='icon' onClick={()=>doneHandler(todo.id)}><MdOutlineDownloadDone/></span>
        </div>
    </form>
  )
}

export default TodoCard