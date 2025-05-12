
function Button({text, color="tomato", children}){
    return (
        <button style={{backgroundColor: color, color:"white"}}>
            {text} : {color}
            {children}
        </button>
    );
}

export default Button;