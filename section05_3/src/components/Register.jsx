import { useState } from "react";

const Register = () => {
    const [state, setState] = useState({
        name: "", 
        birth: "", 
        country: "", 
        bio: ""
    });

    //const [name, setName] = useState("");
    //const [birth, setBirth] = useState("");
    //const [country, setCountry] = useState("");
    //const [bio, setBio] = useState("");


    const onChange = (e) => {
        setState( {
            ...state, 
            [e.target.name] : e.target.value
        })
    }



    const onChangeName = (e) => {
        setState( {
            ...state, name: e.target.value
        })
        // setName(e.target.value);
        // console.log(e.target.value);
    }

    const onChangeBirth = (e) => {
        setState( {
            ...state, birth: e.target.value
        })
        // setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setState( {
            ...state, country: e.target.value
        })
        // setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setState( {
            ...state, bio: e.target.value
        })
        // setBio(e.target.value);
    }

    return (
        <div>
            <div>
                <input name="name" value={state.name} type="text" onChange={onChange} 
                placeholder="이름" />
            </div>

            <div>
                <input birth="birth" value={state.birth} type="date" onChange={onChange}/>
            </div>

            <div>
                <select country="country" value={state.country} onChange={onChange}>
                    <option value=""> -- 선택 -- </option>
                    <option value="KR"> 한국 </option>
                    <option value="US"> 미국 </option>
                    <option value="UK"> 영국 </option>
                </select>
            </div>

            <div>
                <textarea bio="bio" value={state.bio} onChange={onChange}/>
            </div>
        </div>
    );
}
export default Register;