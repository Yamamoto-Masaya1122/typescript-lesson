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

// タプル型 固定長の配列を指定できる
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

// union型 複数の型を指定できる
let unionType: number | string = 10;
let unionType2: (number | string)[] = [10, 'hello', 11]; // 配列の場合は()の中に入れ、その後に[]を使う

// literal型 特定の値を指定できる
let apple: 'apple' = 'apple';
let literalType: 'large' | 'medium' | 'small' = 'large'; // ここではlarge、medium、smallのみを指定できる
const cloth: { color: string; size: 'large' | 'medium' | 'small' } = {
  color: 'red',
  size: 'medium',
}

// typeエイリアス
type ClothSize = 'large' | 'medium' | 'small';
let clothSize: ClothSize = 'medium';

// 関数
// 引数の型と返り値の型を指定できる
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(1, 2);

// void型 何も返さない関数
function sayHello(): void {
  console.log('Hello');
}