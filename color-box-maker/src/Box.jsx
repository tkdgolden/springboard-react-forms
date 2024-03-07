const Box = ({ color, height, width, deleteBox }) => {
    return (
        <>
            <div style={{backgroundColor: color, height: height, width: width}}></div>
            <button onClick={ deleteBox }>x</button>
        </>
    );
};

export default Box