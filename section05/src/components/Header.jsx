function Header(){ //컴포넌트는 대문자로 시작(컴포넌트: html을 리턴하는 자바스크립트 함수)
    return (
    <header>
        {/* {{}} */}
        <h1 style={{color: "blue", fontSize: "40px"}}>Header 부분이에요</h1>
    </header>
    );
}

export default Header;