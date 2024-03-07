const Todo = ({ id, task, deleteTodo }) => (
    <div id={id}>
        <p>{task}</p>
        <button onClick={() => deleteTodo(id)}>X</button>
    </div>
);

export default Todo