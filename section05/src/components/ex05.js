let arr = [1,3,5];

let one = arr[0];
let two = arr[1];
console.log(one, two);

let [one2, two2, three2=0, four=100] = arr; // 구조 분해 할당
// three=0으로 해도 원래 값인 5가 들어감(아예 없으면 undefined)
console.log(one2, two2, three2, four);

let obj = {id: 10, name: 'hoo', hobby: '야구'};
let test1 = obj.id;
let test2 = obj.name;
let test3 = obj.hobby;
// ==
let {id, name, age=25, hobby} = obj; // 구조 분해 할당
console.log(id, name, hobby, age);

function func({id, name, hobby}){
    console.log(name, hobby, id);
};

func(obj);