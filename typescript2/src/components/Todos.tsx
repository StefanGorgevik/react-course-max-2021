import { useContext, FC } from 'react';
import classes from './Todos.module.css';
import TodoItem from './TodoItem';
import TodosContext from '../store/todo-context';

const Todos: FC = () => {
    const todosCtx = useContext(TodosContext);
    const { items } = todosCtx;
    return (<ul className={classes.todos}>
        {items.map(item => <TodoItem key={item.id} text={item.text}
            onRemoveTodo={() => todosCtx.onRemoveTodo(item.id)} />)}
    </ul>)
}

export default Todos;