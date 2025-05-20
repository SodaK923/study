import TodoItem from './TodoItem';
import { useState } from 'react';
import './TodoList.css';

const TodoList=({todo, onUpdate, onDelete})=>{
    const [search, setSearch]=useState("");

    const onChangeSearch=(e)=>{
        setSearch(e.target.value);
    }

    const getSearchResult=()=>{
        return (search==="" ? todo :
            // 할 일 내용, 검색어 둘 다 소문자로 만듦
            // .filter(): 조건에 맞는 것만 뽑음
            todo.filter((item)=>item.content.toLowerCase().includes(search.toLowerCase()))
        );
    }

    return(
        <div className='TodoList'>
            <h4>Todo List 🌱</h4>
            <input 
                className='searchBar' 
                value={search}
                onChange={onChangeSearch}
                type='text' 
                placeholder='검색어를 입력하세요'/>

            <div className='list_wrapper'>
                { getSearchResult().map((item)=>(
                    <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />
                )) }
            </div>
        </div>
    );
}

export default TodoList;

// let arr=[1,2,3];
// let newArr=arr.map((item)=>item*3);
// console.log(newArr);
// [3,6,9]