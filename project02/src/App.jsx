import './App.css'
import { useState, useRef, useEffect } from 'react'

import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'
//import dummy from './db/mock.json'

const mockTodo=[
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime()
  }
];

function App() {
  const [todo, setTodo]=useState(mockTodo);
  const idRef=useRef(0);

  useEffect(()=>{
    let rawTodo=localStorage.getItem("todos");
    if(!rawTodo){
      rawTodo=JSON.stringify([]);
    }
    const localTodo=JSON.parse(rawTodo);
    setTodo(localTodo);

    if(localTodo.length===0){
      return;
    }
    localTodo.sort((a,b)=>Number(b.id)-Number(a.id));
    idRef.current=localTodo[0].id+1;
  },[]);

  const onCreate=(content)=>{
    const newItem={
      id: idRef.current,
      content: content,
      isDone: false,
      createDate: new Date().getTime()
    }
    const newTodo=[newItem, ...todo];
    setTodo(newTodo);
    idRef.current+=1;
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

const onUpdate = (targetId) => {
  const newTodo=todo.map(
    (item)=>{
      if(item.id===targetId){
        return {...item, isDone: !item.isDone};
      }
      else{
        return item;
      }
    }
  );
  setTodo(newTodo);
  localStorage.setItem("todos", JSON.stringify(newTodo));
};

const onDelete=(targetId)=>{
  const newTodo=todo.filter((item)=>item.id!==targetId);
  setTodo(newTodo);
  localStorage.setItem("todos", JSON.stringify(newTodo));
}



  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      {/* todo 배열을 TodoList에 props로 넘김 */}
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
