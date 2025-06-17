import './App.css'
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import AppCounter from './pages/AppCounter'
import AppTodo from './pages/AppTodo'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'

function App() {
  const nav = useNavigate();

  const onClickBtn=()=>{
    nav('/blog');
  }

  return (
    <div className='App'>
      <header>
        <div className='logo'>SmartDash</div>
        <div className='menu'>
          <Link to={'/'}>Home</Link>
          <Link to={'/todo'}>Todo List</Link>
          <Link to={'/counter'}>Counter</Link>
          <button onClick={onClickBtn}>블로그</button>
        </div>
      </header>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<AppTodo />} />
          <Route path='/counter' element={<AppCounter />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
        <div>
        <a href='/'>Home</a>
        <a href='/todo'>Todo</a>
        <a href='/counter'>Counter</a>
      </div>
    </div>
  )
}

export default App
