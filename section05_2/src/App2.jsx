import './App.css'

function UserProfile({name, age, job, avatar}){
  return (
    <div style={{border: "1px solid #ddd", padding: "15px", borderRadius: "8px", width: "250px", textAlign: "center", margin: "10px"}}>
    <img src={avatar} alt={`${name}의 프로필`} style={{width: "80px", height: "80px", borderRadius: "50%"}} />
    <h2>{name}</h2>
    <p>나이: {age}세</p>
    <p>직업: {job}</p>
    </div>
  );

}


function App2() {

  return (
    <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
      <UserProfile name="철수" age={25} job="개발자" avatar="/src/assets/cat1.jpg" />
      <UserProfile name="영희" age={23} job="디자이너" avatar="/src/assets/cat2.jpg" />
      <UserProfile name="민수" age={30} job="마케터" avatar="/src/assets/cat3.jpg" />
    </div>
  )
}

export default App2
