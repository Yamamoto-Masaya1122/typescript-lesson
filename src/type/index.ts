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
const person: { name: string, age: number} = {
  name: 'jack',
  age: 20,
}

console.log(person.name);

// 配列型
const fruits: string[] = ['apple', 'banana', 'cherry'];

// タプル型
const book: [string, number, boolean] = ['book', 10, true];

// 列挙型(特定のまとまったグループのみを指定できる)
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT,
}

coffee.size = CoffeeSize.TALL;
console.log(coffee.size);

// any型
let anything: any = 'Hello';
anything = 10;
anything = {};
anything.fijiti = 'fijiti';