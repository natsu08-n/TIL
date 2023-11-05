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





