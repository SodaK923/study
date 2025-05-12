import './App.css'
import Button from './components/Button'
import Body from './components/Body'
import { useState } from 'react'

function App() {
  const state = useState(100);
  const [count, setCount] = useState(0);
  // console.log(count);
  // setCount(count+1);
  // console.log(count);

  function onIncrease(){
    setCount(count+1);

  }
  
  return (
    <div>
      <h2>6주차: props 와 state</h2>
      <h3>{count}</h3>
      <button onClick={onIncrease}>+</button>
      <Body />
      <Button text={"메일"} color={"yellowgreen"} />
      <Button text={"블로그"} color={"skyblue"} />
      <Button text={"카페"} >
        <div>자식요소</div>
        <p>자식2</p>
        </Button>
    </div>
  )
}

export default App
