import { useState } from 'react'
import Box from './Box.jsx'
import NewBoxForm from './NewBoxForm.jsx'
import { v4 as uuid } from 'uuid'


const BoxList = () => {
    const [boxes, setBoxes] = useState([{id: 1, color: "red", height: 100, width: 100}]);

    function addBox({ color, height, width }) {
        setBoxes(boxes => [...boxes, {id: uuid(), color: color, height: parseInt(height), width: parseInt(width)}]);
        console.log(boxes.length);
    };

    console.log(boxes);
    {boxes.map((box) => (
        console.log(box.color)
    ))};

    function deleteBox() {

    }
    
    return (
        <>
            <h1>Box List</h1>
            {boxes.map((box) => (
                <Box key={box.id} color={box.color} height={box.height} width={box.width} deleteBox={deleteBox} />
            ))}
            <NewBoxForm addBox={addBox}/>
        </>
    );
};

export default BoxList