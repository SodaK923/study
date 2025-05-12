import './App.css'
import Button from './components/Button'
function App() {

  return (
    <div>
      <Button name={"메일"} color={"tomato"} >
        <div>커피?</div>
      </Button>
      <Button name={"카페"} color={"navy"} />
      <Button name={"블로그"} color={"green"} >
      <div>자식요소</div>
      <div>?</div>
      </Button>
    </div>
  )
}

export default App
