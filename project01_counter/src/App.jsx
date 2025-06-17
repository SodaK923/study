import './App.css'
import Viewer from './component/Viewer'
import Controller from './component/Controller'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    let rawCount=localStorage.getItem("count");
    if(!rawCount){
      rawCount=JSON.stringify(0);
    }
    const localCount=JSON.parse(rawCount);
    setCount(localCount);

    
  },[]);
  
  const handleSetCount = (value) => {
    setCount( count + value  );
  }
  return ( 
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  )
}

export default App
