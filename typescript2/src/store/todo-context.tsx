import React, { createContext, FC, useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[];
    onAddTodo: (todo: string) => void;
    onRemoveTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextObj>({
    items: [],
    onAddTodo: (todo: string) => { },
    onRemoveTodo: (id: string) => { },
})

export const TodosContextProvider: FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todo: string) => {
        console.log(todo);
        const newTodo = new Todo(todo);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }

    const removeTodoHandler = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }

    const contextValue: TodosContextObj = {
        items: todos,
        onAddTodo: addTodoHandler,
        onRemoveTodo: removeTodoHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContext;