/**
 *  const.let 等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 =　"var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const変数は一度定義された値を保持
//const val3 = "const変数";
//console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言も不可能
// const val3 = "const変数を再宣言";
// ただし、constで定義したオブジェクトは
// プロパティの変更が可能
// const val4 = {
//   name: "Name",
//   age: 30
// }

// val4.name = "nAME";
// val4.address = "Osaka";

// console.log(val4);

// constで定義した配列はプロパティの変更が可能。
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Kiku";
// const age = 44;

// 「My Name is Kiku. I'm 44 years old.」
//　従来の方法
// const message1 = "My Name is " + name + ". I'm " + age + " years old."
// console.log(message1);

// テンプレート文字列を用いる方法
// const message2 = `My name is ${name}. I'm ${age} years old.`
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return (str)
// };
// console.log(func2("func2です"));

// //
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Kiku",
//   age: 44
// };

// const message1 = `My name is ${myProfile.name} I'm ${myProfile.age} years old.`;
// console.log(message1);

// // 分割代入
// const {name, age} = myProfile;
// const message2 = `My name is ${name} I'm ${age} years old.`;
// console.log(message2);

// const myProfile = ['Kiku', 44];
// const message3 = `My name is ${myProfile[0]} I'm ${myProfile[1]} years old.`;
// console.log(message3);

// const myProfile = ['Kiku', 44];
// const [name, age] = myProfile;
// const message4 = `My name is ${name} I'm ${age} years old.`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello('Kikkun')

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * map　や filter を使った配列の処理
 */
const nameArr = ["Tanaka", "Yamada", "Kiku"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
