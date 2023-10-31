// 3.7.5　プリミティブなのにプロパティがある？
// type HasLength = {length: number};
// const obj: HasLength = "foober";
// console.log(obj);
//プリミティブであるstringがオブジェクト型に適合する
//実はプリミティブに対してプロパティアクセスを行うたびに一時的にオブジェクトが作成されるから。プロパティアクセスが終了したらこのオブジェクトも消える。

let val: {} = 123;
// val = "foober";
// val = {num: 1234};
// val = null; //errorになる
// val = undefined; //errorになる
console.log(val);
