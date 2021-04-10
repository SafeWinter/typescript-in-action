// 泛型
// 定义一个普通打印函数：
function log(value: string): string {
    console.log( value );
    return value;
}

// 改造1：接收字符串数组：
// 途径一：函数重载
function log1(value: string): string;
function log1(value: string[]): string[];
function log1(value: any): any {
    console.log( value );
    return value;
}

// 途径二：联合类型
function log2(value: string | string[]): (string | string[]) {
    console.log( value );
    return value;
}

// 改造为接收任何类型参数：
function log3(value: any): any {
    console.log( value );
    return value;
}
// 点评：any 类型丢失了一些信息：忽略了函数参数类型与返回值类型必须一致的限制

// 解决途径：泛型函数
function log4<T>(value: T): T {
    console.log( value );
    return value;
}
// 调用：
log4<string[]>(['a', 'b']);
log4([1, 2, 3]);

// 泛型：
// 一般的、广泛的、不需要预先定义的数据类型，具体的类型需要在使用的时候才能确定。

// 除了定义函数，泛型还可以定义类型：
type Log = <T>(value: T) => T
let mylog: Log = log4
mylog(['a', 1, 'b', 2]);

// 泛型接口
interface Log1 {
    <T> (value:T): T
}
// 此时，泛型仅约束了接口中一个参数为 value 的函数

// 如果泛型对接口中的其他成员生效，需改造为：
interface Log2<T> {
    (value: T): T;
}
// 注意：此时的 Log2 接口在实现时必须指定具体的参数类型：
let mylog2: Log2<number> = log4
mylog2(1);

// 如何理解泛型：
// 将泛型变量与函数参数等同对待，只不过泛型是另一个维度的“参数”，代表“类型”而不是代表“值”
// 泛型在后续高级类型中有广泛应用，建议打下良好基础。
