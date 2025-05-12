import { useState } from "react";

const Register=()=>{
    const [name, setName]=useState("이름");
    const onChange=(e)=>{
        setName(e.target.value);
    }
    return(
        <div>
            <input type="text" value={name} onChange={onChange} placeholder="이름" /> {name}
        </div>
    );
}

export default Register;