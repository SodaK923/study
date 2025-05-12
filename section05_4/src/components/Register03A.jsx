import "./Register03.css";
import { useState } from "react";

const Register03=()=>{
  const [name, setName]=useState("");
  const [id, setId]=useState("");

  const onChangeName=(e)=>{
    setName(e.target.value);
  }

  const onChangeId=(e)=>{
    setId(e.target.value);
  }

  const onSubmit=()=>{
    let result=document.getElementById("result");
    result.innerHTML=`<p>이름: ${name}, 아이디: ${id} </p>`
  }

    return(
        <div>
            <h2>회원가입</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="col1">이름</td>
                        <td><input type="text" onChange={onChangeName} /></td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" onChange={onChangeId} /></td>
                    </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2"><button onClick={onSubmit}>제출</button></td>
                  </tr>
                </tfoot>
            </table>
            <div id="result"></div>
            {name} {id}
        </div>
    );
}

export default Register03;