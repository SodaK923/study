let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, ...arr1]; // 스프레드 연산자
console.log(arr2);

function func(...arg){
    console.log(arg);
    console.log(arg[1]);
}
func(2,4,6,8,10,200);