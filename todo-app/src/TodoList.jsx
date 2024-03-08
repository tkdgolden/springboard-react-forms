import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Todo from './Todo.jsx'
import NewTodoForm from './NewTodoForm.jsx'

const TodoList = () => {
    const [todos, setTodos] = useState([{id: 1, task: "Tada"}]);

    const addTodo = (task) => {
        setTodos(todos => [...todos, {task: task, id: uuid()}]);
    };

    const deleteTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    console.log(todos);

    return (
        <>
            <h1>To Do List</h1>
            {todos.map(todo => <Todo key={todo.id} id={todo.id} task={todo.task} deleteTodo={deleteTodo} />)}
            <NewTodoForm addTodo={addTodo} />
        </>
    );
};

export default TodoList