const Box = ({ id, color, height, width, deleteBox }) => {
    return (
        <>
            <div name={color} style={{backgroundColor: color, height: height, width: width}}></div>
            <button onClick={ () => deleteBox(id) }>x</button>
        </>
    );
};

export default Box