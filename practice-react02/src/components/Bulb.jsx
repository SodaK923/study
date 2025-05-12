import { useState } from "react";

const Bulb=()=>{
    const [light, setLight]=useState("OFF");
    const onLight=()=>{
        setLight(light==="OFF"?"ON":"OFF");
    }
    return(
        <div>
            {light==="ON"?(<h1 style={{color:"orange"}}>ON</h1>):(<h1 style={{color:"grey"}}>OFF</h1>)}
            <button onClick={onLight}>{light==="ON"?"OFF":"ON"}</button>
        </div>
    );
}

export default Bulb;                     