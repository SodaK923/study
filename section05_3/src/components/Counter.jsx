import { useState } from "react";

const Counter = () =>{
    const [count, setCount]=useState(0);
    const onIncrease = () =>{
        setCount(count+1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default Counter;