import './App.css'
import { useState, useRef } from 'react'

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
  const idRef=useRef(3);

  const onCreate=(content)=>{
    const newItem={
      id: idRef.current,
      content: content,
      isDone: false,
      createDate: new Date().getTime()
    };
    setTodo([newItem, ...todo]);
    idRef.current+=1;
  };

const onUpdate = (targetId) => {
  // setTodo로 상태 업데이트 시작
  setTodo(
    // todo 배열을 map으로 돌면서
    todo.map((item) => {
      // 만약 현재 아이템 id가 targetId랑 같으면
      if (item.id === targetId) {
        // 해당 아이템의 isDone 값을 반전시킨 새 객체를 반환
        // (예: true면 false로, false면 true로 바꿈)
        return { ...item, isDone: !item.isDone };
      } else {
        // 아니면 원래 아이템 그대로 반환
        return item;
      }
    })
  );
};

const onDelete=(targetId)=>{
  setTodo(
    todo.filter((item)=>item.id!==targetId)
  );
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
