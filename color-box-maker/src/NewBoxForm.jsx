import { useState } from 'react'


const NewBoxForm = ({ addBox }) => {
    const [fData, setFormData] = useState({color: "", height: "", width: ""});
    const INITIAL_STATE = {color: "", height: "", width: ""};

    const handleChange = evt => {
        const { name, value } = evt.target;

        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        if (fData.color && fData.height && fData.width) {
            addBox(fData);
            setFormData(INITIAL_STATE);
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="color">Color: </label>
            <input 
                id="color" 
                type="text" 
                placeholder="color" 
                value={fData.color} 
                onChange={handleChange} 
                name="color" 
            />
            <label htmlFor="height">Height: </label>
            <input
                id="height" 
                type="number" 
                placeholder="height" 
                value={fData.height} 
                onChange={handleChange} 
                name="height" 
            />
            <label htmlFor="width">Width: </label>
            <input 
                id="width"
                type="number" 
                placeholder="width" 
                value={fData.width} 
                onChange={handleChange} 
                name="width" 
            />
            <button>Add!</button>
        </form>
    );
};

export default NewBoxForm