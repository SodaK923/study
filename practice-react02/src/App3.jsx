import './App.css'
import { useState } from 'react'

function App3() {
  const [count, setCount]=useState(0); // setCount는 함수임..
  const [light, setLight]=useState("OFF");

  const onIncrease=()=>{
    setCount(count+1); // setCount=count+1 아님 제발
  }
  const onLight=()=>{
    setLight(light==="ON"?"OFF":"ON");
  }
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>Click</button>
      <h1>{light}</h1>
      <button onClick={onLight}>Turn/Off</button>
    </div>
  );
}

export default App3
