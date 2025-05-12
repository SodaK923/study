console.log("3주차 실습");


let area1=getArea(10,200); //함수 호출
let area2=getArea(3,20);
console.log(area1, area2);

function getArea(width, height){
    // let width=10;
    // let height=10;
    let area=width*height;
    
    // console.log("총 면적은 "+area);
    return area;
}
let ftn1=getArea; //함수를 변수처럼
console.log(ftn1(30,5));

let ftn2=function sample(){
    console.log("sample 함수");
}
ftn2();

let ftn3=function(){
    console.log("sample2 함수");
}
ftn3();

let ftn4=()=>{
    console.log("sample2 함수");
    return 400;
}
console.log(ftn4());

let ftn5=(a,b)=>{
    return a+b;
}
console.log(ftn5(10,20));

let ftn6=(a,b)=> a+b;

console.log(ftn6(10,20));


console.log("=== 콜백함수 ===");
function main(value){
    value(); // value는 (콜백)함수
}
function sub(){
    console.log("sub 함수");
}
main(sub); // sub는 콜백함수

main(()=>{
    console.log("sub2 함수");
});