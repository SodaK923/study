import './App.css'
import Viewer from './component/Viewer'
import Controller from './component/Controller'

import { useState, useEffect } from 'react'

function App() {
  const [count, setCount]=useState(0);

    useEffect(()=>{
      let rawCount=localStorage.getItem("count");
      if(!rawCount){
        rawCount=JSON.stringify(0);
      }
      const localCount=JSON.parse(rawCount);
      setCount(localCount);
    },[]); // 마운트될 때만 실행

  const handleSetCount=(value)=>{
    const newCount=count+value;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  }

  return (
    <div className='App'>
      <h1>Simple Counter(K.Sua)</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  )
}

export default App
