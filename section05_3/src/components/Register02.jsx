import { useState } from "react";

const Register02 = () => {
    const [state, setStaste] = useState({
        name: "", 
        birth: "", 
        country: "", 
        bio: ""
    });

    const onChange = (e) => {
        setStaste( {
            ...state, 
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = () => {
        let result = document.getElementById("result");
        result.innerHTML = `<p>이름: ${state.name} <br/>
        생년월일: ${state.birth} <br/> 국적: ${state.country} <br/>
        자기소개: ${state.bio} </p>`;
    }

    const onReset = () => {
        setStaste({
            name: "",
            birth: "", 
            country: "", 
            bio: ""});
        let result = document.getElementById("result");
        result.innerHTML = "";
    }

    return (
        <div>
            <h2>배화 회원가입</h2>
            <table>
                <thead></thead>
                <tbody>
                    <tr><td className="col1">이름</td><td>
                        <input name="name" value={state.name} 
                        onChange={onChange} placeholder="이름" />
                    </td></tr>
                    <tr><td>생년월일</td><td>
                        <input birth="birth" value={state.birth} 
                        type="date" onChange={onChange}/>
                    </td></tr>
                    <tr><td>국적</td><td>
                        <select country="country" value={state.country} onChange={onChange}>
                            <option value=""> -- 선택 -- </option>
                            <option value="KR"> 한국 </option>
                            <option value="US"> 미국 </option>
                            <option value="UK"> 영국 </option>
                        </select>
                    </td></tr>
                    <tr><td>자기소개</td><td>
                        <textarea bio="bio" value={state.bio} 
                        onChange={onChange}/>
                    </td></tr>
                </tbody>
                <tfoot>
                    <tr><td colSpan={2}><button onClick={onSubmit}>제출</button>
                        <button onClick={onReset}>초기화</button>
                    </td></tr>
                </tfoot>
            </table>
            <div id="result"></div>
        </div>
    );
}
export default Register02;