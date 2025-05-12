import './App.css'

// 카드 컨테이너 컴포넌트(children 사용)
function Card({children}){
  return(
    <div style={{border: "1px solid skyblue", padding: "15px", borderRadius: "8px", width: "250px", textAlign: "center", margin: "10px", backgroundColor: "aliceblue"}}>
      {children}
    </div>
  );
}


// 사용자 프로필 카드 컴포넌트
function UserProfile({name, age, position, team, avatar}){
  return(
    <Card>
      <img src={avatar} alt={`${name}의 프로필`}
      style={{width: "80px", height: "80px", borderRadius: "50%"}} />
      <h2>{name}</h2>
      <p>나이: {age}세</p>
      <p>포지션: {position}</p>
      <p>팀: {team}</p>
    </Card>
  );
}


function App3() {

  return (
    <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
      <UserProfile name="김하성" age={25} position="유격수" team="샌디에이고 파드리스" avatar="/src/assets/cat1.jpg" />
      <UserProfile name="이정후" age={23} position="중견수" team="샌프란시스코 자이언츠" avatar="/src/assets/cat2.jpg" />
      <UserProfile name="김혜성" age={30} position="2루수" team="LA 다저스" avatar="/src/assets/cat3.jpg" />
    </div>
  )
}

export default App3