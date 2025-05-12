function Body(){
    const obj = {id: 10, name:'hoo', isLogin: false}; //객체: {}, 배열: []
    obj.isLogin=true;
    // if~else
    // if(obj.isLogin){
    //     return(
    //         <div>로그아웃</div>
    //     );
    // }else{
    //     return(
    //         <div>로그인</div>
    //     );
    // }
    //삼항연산자
    return(
        <div>
            {obj.isLogin ? (
                <div>로그아웃</div>
            ) : (
                <div>로그인</div>
            )}
        </div>
    );
}

export default Body;

function Body2(){
    const number = 100;
    const obj = {id: 10, name:'hoo'}; //객체: {}, 배열: []
    return(
        <div>
            <h1>Body 부분</h1>
            <h2>{number%2 === 1 ? "홀수":"짝수"}</h2>
            <h2>{obj.name}</h2>
        </div>
    );
}