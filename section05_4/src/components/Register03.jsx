import "./Register03.css";
import { useState, useRef, useEffect } from "react";
import Even from './Even';

// ref: 값이 바뀌어도 렌더링이 되지 않는다(화면이 갱신되지 않는다)
// state: 값이 바뀔 때마다 렌더링이 된다

const Register03=()=>{
  const [name, setName]=useState("");
  const [id, setId]=useState("");
  const [count, setCount]=useState(0);
  const isMount=useRef(false);

  // useEffect(콜백함수, 의존성배열);
  useEffect(()=>{
    console.log(`마운트: count: ${count}, name: ${name}`);
  }, []); // 마운트될 때만 실행

  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      return;
    }

    console.log("업데이트 만")
  }); // 업데이트될 때만 실행

  // 화면 갱신이 일어나지 않음(useState: 화면갱신)
  const refObj=useRef(100);
  const countRef=useRef(0);
  const inputRef=useRef("");
  const idRef=useRef("");

  //console.log("렌더링!!");
  //console.log(refObj);
  //console.log(refObj.current);

  const onChangeName=(e)=>{
    countRef.current++;
    setName(e.target.value);
  }

  const onChangeId=(e)=>{
    countRef.current++;
    setId(e.target.value);
  }

  const onSubmit=()=>{
    let result=document.getElementById("result");

    if(name===""){
      //console.log(inputRef.current);
      inputRef.current.focus();
      //result.innerHTML="이름을 입력하세요.";
      //alert("이름을 입력하세요.");
      return;
    }

    if(id.length<5){
      idRef.current.focus();
      result.innerHTML="* 아이디는 5글자 이상 입력해야 함";
      return;
    }

    result.innerHTML=`<p>이름: ${name}, 아이디: ${id} </p>`;
  }


  const onClear=()=>{
    inputRef.current.value="";
    setName("");
    let result=document.getElementById("result");
    result.innerHTML="";
  }

    return(
        <div>
            <h2>회원가입</h2>
            <table>
                <tbody>
                    <tr>
                        <td className="col1">이름</td>
                        <td>
                          <input ref={inputRef} type="text" onChange={onChangeName} />
                          <button onClick={onClear}>초기화</button>
                        </td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td><input ref={idRef} type="text" onChange={onChangeId} /></td>
                    </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2"><button onClick={onSubmit}>제출</button></td>
                  </tr>
                </tfoot>
            </table>
            <div id="result"></div>
            <h2>총 변경 횟수는? {countRef.current}</h2>
            {/* {name} {id} */}
            <button onClick={()=>{
              refObj.current++;
              console.log(refObj.current);
            }}>ref+1</button>{refObj.current}<br />
            <button onClick={()=>{
              setCount(count+1);
            }}>count+1</button> {count}
            {count%2===0 && <Even />}
        </div>
    );
}

export default Register03;