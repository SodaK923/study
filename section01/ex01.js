console.log("안녕");
a=300;
console.log(a);

let x = true; // let(변수)
let y = 200;
console.log(x+y);

// let(변수)이면 아무타입이나 다 들어간다. 중복선언은 불가능하다. 자동캐스팅이 가능하다.

const fn = 10; // const(상수)
// fn = fn * 10;
console.log(fn);

console.log("변수와 상수");
let age=25;
// let age=30; 같은 변수명은 에러

// 자료형
let num = Infinity; // 무한대
let num2 = -Infinity;
let num3 = NaN; // Not a Number: 결과가 숫자가 아님
let c = "안녕";
console.log(typeof(c), typeof(num), typeof(num2), typeof(num3));

console.log(1=="1");
console.log(true==="1");

let str1 = "컴퓨터공학과";
console.log(str1+"의 길이는 "+str1.length+"입니다.");
console.log(`${str1}의 길이: ${str1.length} 입니다.`);

// 문자열의 길이, 백틱 표현
console.log(`표현식 273 + 52의 값은 ${273+52}입니다.`);

let num10 = 10;
let str10 = "200";
console.log(num10+str10); // "10200" 다른 자료형 + String = String

// 형변환
let ss = "100점";
console.log(Number(ss), parseInt(ss), Boolean(ss));