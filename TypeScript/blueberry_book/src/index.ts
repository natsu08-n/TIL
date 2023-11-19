/*================================================
3.7.5　プリミティブなのにプロパティがある？
================================================*/
// type HasLength = {length: number};
// const obj: HasLength = "foober";
// console.log(obj);
//プリミティブであるstringがオブジェクト型に適合する
//実はプリミティブに対してプロパティアクセスを行うたびに一時的にオブジェクトが作成されるから。プロパティアクセスが終了したらこのオブジェクトも消える。

// let val: {} = 123;
// val = "foober";
// val = {num: 1234};
// val = null; //errorになる
// val = undefined; //errorになる
// console.log(val);

//-------------------------------------------------

/*================================================
3.8　力試し
================================================*/

/*
type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
natsu, 30, 1
john, 17, 0
mary, 15, 1
`;

const users: User[] = [];

const lines = data.split("\n");
for (const line of lines) {
    if (line === "") {
        continue;
    }
    const [name, ageString, premiumUserString] = line.split(",");
    const age = Number(ageString);
    // const premiumUser = String(premiumUserString) === '1';//error
    // const premiumUser = premiumUserString === '1';//error
    // const premiumUser = premiumUserString === '1' ? true : false;//error
    // const premiumUser = premiumUserString !== '1' ? false : true;
    // const premiumUser = String(premiumUserString) === '1' ? true : false; //error
    // const premiumUser = premiumUserString === '1' ? true : false;//error

    const premiumUser = Number(premiumUserString) === 1 ? true : false; //OK


    users.push({
        name,
        age,
        premiumUser
    });
}

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} はプレミアムユーザーです`);
    } else {
        console.log(`${user.name} はプレミアムユーザーではありません`);
        
    }
}
*/

/*================================================
4.1　関数の作り方
================================================*/

/*------------------------------------------------
4.1.1　関数宣言で関数を作る
------------------------------------------------*/

/*console.log(range(5, 10));//hoisting 関数宣言より前に関数を使用できる

function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}*/

/*------------------------------------------------
4.1.2　返り値がない関数を作る
------------------------------------------------*/

/*function helloWorldNTimes(n: number): void {
    if (n >= 20) {
        console.log("20も指定しないでください！！");
        return;
    }
    for (let i = 0; i < n; i++) {
        console.log("hello, world");
    }
}
helloWorldNTimes(50);*/

/*------------------------------------------------
4.1.3　関数式で関数を作る
------------------------------------------------*/
/*const Tom: Human = {height: 1.58, weight: 46};
console.log(calcBMI(Tom)); //関数式の場合、const宣言よりも前のこの位置で関数実行することはできない。
//ただの関数宣言の場合は巻き上げられたから、関数宣言の前に関数を実行しても大丈夫だった。

type Human = {
    height: number;
    weight: number;
};

// const calcBMI = function(human: Human) :number {
//     return human.weight / human.height ** 2;
// };

//引数に分割代入をつかうことができる
const calcBMI = function({weight, height}: Human) :number {
    return weight / height ** 2;
};*/

/*------------------------------------------------
4.1.4　アロー関数式で関数を作る、4.1.5　アロー関数式の省略形
------------------------------------------------*/
//アロー関数は通常無名関数として作成される。hoge()=>{}のような書き方はできない。


/*type Human = {
    height: number;
    weight: number;
};

//引数に分割代入をつかうことができる
const calcBMI = ({
    weight, height
}: Human) :number => {
    return weight / height ** 2;
};

//省略形で書いた場合
const calcBMI = ({
    weight, height
}: Human) :number => weight / height ** 2;

const Tom: Human = {height: 1.58, weight: 46}; 
console.log(calcBMI(Tom));*/


/*type Human = {
    height: number;
    weight: number;
};
type ReturnObj = {
    bmi: number;
}

//返り値がオブジェクトの場合、{}が関数の記法と混ざらないように()で囲む必要がある。
const calcBMIObject = ({
    height, weight
}: Human): ReturnObj => ({ //返り値がオブジェクト
    bmi: weight / height ** 2
});

const Anna: Human = {height: 1.58, weight: 46}; 
console.log(calcBMIObject(Anna));*/

/*------------------------------------------------
4.1.6　メソッド記法で関数を作る
------------------------------------------------*/
/*const obj = {
    //メソッド記法
    double(num: number): number {
        return num * 2;
    },
    //通常の記法である、(プロパティ名:関数式)＋アロー関数
    double2: (num: number): number => num * 2
};

console.log(obj.double(100));
console.log(obj.double2(100));*/

/*------------------------------------------------
4.1.7　可変長引数の宣言
------------------------------------------------*/

/*const sum = (base: number, ...args: number[]): number => {
    let result = base * 10;
    for (const num of args) {
        result += num;
    }
    return result;
}

console.log(sum(2, 4, 6));//2がbase, 残りが可変長引数に入る　*/

/*------------------------------------------------
4.1.8　関数呼び出しにおけるスプレッド構文
------------------------------------------------*/

/*const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}

const arr = [1, 2, 3, 4]

console.log(sum(...arr));*/  //関数呼び出し時にスプレッド構文を使っている
//引数に使いたい配列の長さがわからないときに使うと便利

/*------------------------------------------------
4.1.9　オプショナル引数の宣言
------------------------------------------------*/
/*const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log(toLowerOrUpper("Hello"));
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", true));*/

/*------------------------------------------------
4.1.10　コールバック関数を使ってみる
------------------------------------------------*/
/*type User = {name: string; age: number};
const getName = (u: User): string => u.name;
const users: User[] = [
    {name: "akira", age: 26},
    {name: "kaneda", age: 17}
];

const names = users.map(getName);
console.log(names);*/

//コールバック関数に関数の中身を直接入れたバージョン。こっちのが見通しがよい。
//コールバック関数を引数として受け取るような関数は高階関数と呼ぶ。
/*type User = {name: string; age: number};
const users: User[] = [
    {name: "akira", age: 26},
    {name: "kaneda", age: 17}
];

const names = users.map((u: User): string => u.name);
console.log(names);*/

/*================================================
4.2　関数の型
================================================*/

/*------------------------------------------------
4.2.1　関数型の記法
------------------------------------------------*/
//xRepeat二カーソルを合わせると関数型の記法が見える
//関数型　は　(引数リスト) => 返り値の型
// const xRepeat = (num: number): string => "x".repeat(num);

/*------------------------------------------------
4.2.2　返り値の型注釈は省略可能
------------------------------------------------*/
//返り値を書かないと型推論で決められる。ここでは返り値がvoidになっている。
/*const g = (num: number) => {
    for (let i = 0; i < num; i++) {
        console.log("hello, world!");
    }
}*/

/*------------------------------------------------
4.2.3　返り値の型注釈は省略すべきか
------------------------------------------------*/
//返り値の型を明示する利点: 関数内部で返り値の型に対して型チェックを働かせられる
/*function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

const arr = range(5, 10);
for (const value of arr) console.log(value);*/

/*------------------------------------------------
4.2.4　引数の型注釈が省略可能な場合
------------------------------------------------*/
//逆方向の型推論(contextual typing)：式の型が先にわかっている場合に、それをもとに式の内部に対して推論が働く。
//変数宣言の時に変数に型注釈を入れた例↓
/*type F = (arg: number) => string;
const xRepeat: F = (num) => "X".repeat(num);*/

//関数引数の場合↓
/*const nums = [1,2,3,4,5,6,7,8,9];
const arr2 = nums.filter((x) => x % 3 === 0);
console.log(arr2);
//filterの型定義によりfilterが受け取るコールバック関数の型が判明している。

//文脈上の型がオブジェクト型を伝播してくる場合↓
type Greetable = {
    greet: (str: string) => string;
}
const obj: Greetable = {
    greet: (str) => `Hello, ${str}!`
}*/
//省略できるのかどうなのか、迷ったら省略してみて、コンパイルエラーがでるか見るのも一つの手。

/*------------------------------------------------
4.2.5　コールシグネチャによる関数型の表現
------------------------------------------------*/

//コールシグネチャはオブジェクト型の中で使用できる構文。
// (引数リスト):返り値の型;

/*type MyFunc = {
    isUsed?: boolean;
    (arg: number): void;
};

const double: MyFunc = (arg: number) => {
    console.log(arg * 2);
}

double.isUsed = true;
console.log(double.isUsed);
double(1000);

//次の書き方の意味は同じ。
//普通の関数型の書き方
type F = (arg: string) => number;
//コールシグネチャの関数型の書き方
type G = {(arg: string): number; };

//複数のコールシグネチャを持つ場合。
//string型を引数として渡すとnumber型を返し、number型を引数として渡すとboolean型を返す
type SwapFunc = {
    (arg: string): number;
    (arg: number): boolean;
}*/











