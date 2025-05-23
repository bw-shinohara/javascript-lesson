// Q1変数
let nickname ='ヨースケ';
let age = 33;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

// Q3オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


// Q4配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);


// Q5四則演算
let totalAge = 0;
for (let player of playerList) {
  totalAge += player.age;
}
let averageAge = totalAge / playerList.length;
console.log(averageAge);


// Q6関数
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();


// Q7メソッド
user.birthday ='2000-09-27';
console.log(user);

user.sayHello = function() {
  console.log('Hello!');
}
user.sayHello();


// Q8 引数
let calc = {};

// 和
calc.add = function(x, y) {
  console.log(x + y);
};
calc.add(3, 4); 

// 差
calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.subtract(20, 10);

// 積
calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.multiply(7, 7);

// 商
calc.divide = function(x, y) {
  console.log(x / y);
};
calc.divide(25, 5); 


// Q9
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);

console.log('5 を 3 で割った余りは ' + result + ' です。');


// Q10
function foo() {
  let x = 1;
}
console.log(x);
// JavaScriptではスコープという変数の有効範囲が決まっており、
// 関数fooの中で定義した変数Xは関数fooの中でしか参照することができないので、
// 関数fooの外で使おうとするとエラーが起こる。