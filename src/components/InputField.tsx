import  React,{useRef} from 'react';
import '../../src/style.css';

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    addTodo:(e:React.FormEvent<HTMLFormElement>)=>void;
}
const InputField:React.FC<Props>=({todo,setTodo,addTodo})=>{
    const inputRef=useRef<HTMLInputElement>(null);
    return(
            <form className='input' 
            onSubmit={(e)=>{
                addTodo(e);
                inputRef.current?.blur();}}
            >
            <input type='input'
            ref={inputRef} 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            className='input__box' placeholder='Enter a task'/>
            <button type='submit' className='input__submit'
            
            >Go</button>
            </form>
    )
}

export default InputField;
