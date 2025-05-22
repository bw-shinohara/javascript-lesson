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

