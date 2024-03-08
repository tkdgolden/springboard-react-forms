import { useState } from 'react'

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = "";
    const [fData, setFormData] = useState({ task: INITIAL_STATE });

    const handleSubmit = evt => {
        evt.preventDefault();

        if (fData.task) {
            addTodo(fData.task);
            setFormData({ task: INITIAL_STATE });
        }
    }

    const handleChange = evt => {
        const { name, value } = evt.target;

        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task: </label>
            <input
                id="task"
                name="task"
                type="text"
                value={fData.task}
                onChange={handleChange}
            >
            </input>
            <button>Enter</button>
        </form>
    );
};

export default NewTodoForm