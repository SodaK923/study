console.log("4주차: 객체, 배열 실습");

let b = 2; // 전역변수 b
function func1(){
    let a = 1; // 지역변수 a
    console.log(b)
}
// console.log(a); // ??
console.log(b);
func1();

let person = {
    name: "hong",
    age: 25,
    hobby: "테니스",
    "Like cat": true
};

console.log(person);
console.log(person.name);
console.log(person["age"]);

let prop = "hobby";
console.log(person[prop]);
person.gender = "female";

console.log(person);

function addProperty(obj, key, value){
    obj[key] = value;
}

// let obj = new Object(); ==
let obj = {};
addProperty(obj, "aa", 10);
addProperty(obj, "bb", true);
addProperty(obj, "cc", Infinity);

delete obj.cc;
delete obj["bb"];
console.log(obj);

let res1 = "bb" in obj;
let res2 = "aa" in obj;
console.log(res1, res2);

const member = {
    name: "hong",
    sayHi: function(){
        console.log("안녕");
    }
}
member.sayHi();

const member2 = {
    name: "hong",
    sayHi: ()=>{
        console.log("안녕");
    }
}
member2.sayHi();

const member3 = {
    name: "hong",
    sayHi: ()=>{
        console.log("안녕");
    }
}
member3.sayHi();

let arr1 = []; // new Array();
arr1 = [1,2,3];
console.log(arr1);

arr1 = [10, "test", true, ()=>{}, {}];
console.log(arr1);

arr1.push("바나나");
arr1.push("바나나2");
arr1.pop();
arr1.pop();
arr1.pop();
arr1[10] = 200;
console.log(arr1);

let arr2 = [1,2,3,4,5];
arr2.splice(2,2);
console.log(arr2); //[1,2,5]
arr2.splice(2,0,300);
console.log(arr2);

for(let i=0; i<arr2.length; i++){
    console.log(`${i}번째 원소 = ${arr2[i]} 입니다`)
}

for(let i=arr2.length-1; i>=0; i--){
    console.log(`${i}번째 원소 = ${arr2[i]} 입니다`)
}