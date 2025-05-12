const Button=({name, color, children, coffee})=>{
    return(
        // <button style={{color:props.color}}>{props.name}:{props.color}</button>
        <button style={{color:color}}>
        {children}
        {name}:{color}
        {children}
        {coffee}
        </button>
    );
}

export default Button;