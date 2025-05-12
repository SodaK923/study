import './App.css'

import { useState } from 'react';

const UserProfile=({name, age, hobby})=>{
  const [likes, setLikes]=useState(0);
  const onIncrease=()=>{
    setLikes(likes+1);
  }

  return (
    <div>
    <h2>[{name}]</h2>
    <p>나이: {age}</p>
    <p>취미: {hobby}</p>
    <p>좋아요: {likes}</p>
    <button onClick={onIncrease}>♡</button>
    </div>
  );
}

function App2() {

  return (
    <div>
    <UserProfile name="이정후" age={25} hobby="야구" />
    <UserProfile name="김하성" age={27} hobby="축구" />
    <UserProfile name="김혜성" age={29} hobby="농구" />
    </div>
  );
}

export default App2
