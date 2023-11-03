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

