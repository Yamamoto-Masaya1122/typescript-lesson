// boolean型
let hasValue = true;
// number型（整数、浮動小数点数）
let count = 10;
let float = 3.14;
let negative = -10;
// string型（単一引用符、ダブル引用符、バッククオート）
let single = 'Hello';
let double = "hello";
let back = `hello`;
// 型推論ができない、効かない場合に型注釈を使用する
// オブジェクト型
const person = {
    name: 'jack',
    age: 20,
};
console.log(person.name);
// 配列型
const fruits = ['apple', 'banana', 'cherry'];
// タプル型 固定長の配列を指定できる
const book = ['book', 10, true];
// 列挙型(特定のまとまったグループのみを指定できる)
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
coffee.size = CoffeeSize.TALL;
console.log(coffee.size);
// any型
let anything = 'Hello';
anything = 10;
anything = {};
anything.fijiti = 'fijiti';
// union型 複数の型を指定できる
let unionType = 10;
let unionType2 = [10, 'hello', 11]; // 配列の場合は()の中に入れ、その後に[]を使う
// literal型 特定の値を指定できる
let apple = 'apple';
let literalType = 'large'; // ここではlarge、medium、smallのみを指定できる
const cloth = {
    color: 'red',
    size: 'medium',
};
let clothSize = 'medium';
// 関数
// 引数の型と返り値の型を指定できる
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
// void型 何も返さない関数
function sayHello() {
    console.log('Hello');
}
const anotherAdd = add;
anotherAdd(1, 2);
const anotherMul = (num1, num2) => num1 * num2;
anotherMul(3, 4);
let subject = 'math';
export {};
