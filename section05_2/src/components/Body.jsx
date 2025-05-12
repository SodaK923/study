const Body = () => {
    function handleOnClick(e){
        //alert("버튼 클릭!!");
        console.log(e.target.name);
    }
    return (
        <div>
            <h3>컴포넌트</h3>
            <button name="버튼A" onClick={handleOnClick}>클릭 A</button>
            <button name="버튼B" onClick={handleOnClick}>클릭 B</button>
        </div>
    );
}

export default Body