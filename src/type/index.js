// boolean型
var hasValue = true;
// number型（整数、浮動小数点数）
var count = 10;
var float = 3.14;
var negative = -10;
// string型（単一引用符、ダブル引用符、バッククオート）
var single = 'Hello';
var double = "hello";
var back = "hello";
// 型推論ができない、効かない場合に型注釈を使用する
// オブジェクト型
var person = {
    name: 'jack',
    age: 20,
};
console.log(person.name);
// 配列型
var fruits = ['apple', 'banana', 'cherry'];
// タプル型 固定長の配列を指定できる
var book = ['book', 10, true];
// 列挙型(特定のまとまったグループのみを指定できる)
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
coffee.size = CoffeeSize.TALL;
console.log(coffee.size);
// any型
var anything = 'Hello';
anything = 10;
anything = {};
anything.fijiti = 'fijiti';
// union型 複数の型を指定できる
var unionType = 10;
var unionType2 = [10, 'hello', 11]; // 配列の場合は()の中に入れ、その後に[]を使う
// literal型 特定の値を指定できる
var apple = 'apple';
var literalType = 'large'; // ここではlarge、medium、smallのみを指定できる
var cloth = {
    color: 'red',
    size: 'medium',
};
var clothSize = 'medium';
