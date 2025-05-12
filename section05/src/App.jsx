import './App.css'
import Header from './components/Header' //자동완성(확장자 유무 상관없음)
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      {/* 태그처럼 써서 호출, 종료태그 필수 */}
      <Header /> 
      <Body />
      <Footer />
    </div>
  )
}

export default App
