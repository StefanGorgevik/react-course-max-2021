import { FC, useRef, useContext } from 'react'
import classes from './NewTodo.module.css';
import TodosContext from '../store/todo-context';

const NewTodo: FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoRef = useRef<HTMLInputElement>(null);

    const submitNewTodoHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const newTodo = todoRef.current!.value;

        if (newTodo.trim().length === 0) {
            //throw error;
            return;
        }

        todosCtx.onAddTodo(newTodo);
    }

    return <form onSubmit={submitNewTodoHandler} className={classes.form}>
        <label htmlFor='text'>Todo text</label>
        <input type='text' id='text' ref={todoRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo;