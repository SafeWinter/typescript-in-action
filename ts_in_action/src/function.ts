// 1. 通过 function 定义
function sum1(x: number, y: number) {
    return x + y;
}
// 注：参数类型需显式声明，返回值类型则可通过 ts 的类型推断省略


// 2. 通过变量定义函数类型
let sum2: (x: number, y: number) => number;

// 使用前需实现：
sum2 = (c, d) => (c * d);


// 3. 通过类型别名定义函数类型：
type sum3 = (x: number, y: number) => number

// 实现
let y:sum3 = (a, b) => ( 2 * a + b);
console.log( y(1,2) )     // result: 4

// 4. 通过接口
interface sum4 {
    (x: number, y: number): number
}

// 后三种方式只是定义了函数类型，调用时需要补全变量的函数体


// 函数参数的规定
// 1. 形参与实参须一一对应，不能多也不能少
// console.log( sum1(1) );         // Error: 应有 2 个参数，但获得 1 个。
// console.log( sum1(1, 2, 3) );   // Error: 应有 2 个参数，但获得 3 个。

// 2. 参数可声明为可选的（?）
function sum5(x: number, y?: number) {
    return y ? ( x + y ) : x;
}
console.log( sum5(10) );    // 10

// 3. 可选参数必须位于必选参数之后：
// function sum6(x: number, y?: number, z: number) {   // Error: 必选参数不能位于可选参数后。
//     return x + z;
// }

// 4. 带默认值的参数
// 在必选参数前的参数，必须指定默认值，否则报错：
function sum6(x: number, y = 10, z: number, q = 100) {
    return x + y + z + q
}

// 调用时必须通过 undefined 来获取中间参数的默认值：
console.log( 'sum6(1, undefined, 3) = ', sum6(1, undefined, 3) )    // 114 = 1 + 10 + 3 + 100
console.log( 'sum6(1, 2, 3) = ', sum6(1, 2, 3) )                    // 106 = 1 + 2 + 3 + 100
// console.log( 'sum6(1, 3) = ', sum6(1, 3) )                       // Error: 应有 3-4 个参数，但获得 2 个。

// 可见，由于 z 为必选参数，y 必须显示声明 undefined 才能调用其默认值，而 q 则无需声明。


// 5. 剩余参数
// 用于函数的参数个数不确定的情况：
function sum7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => (pre + cur) );
}

console.log( `sum7(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) = ${sum7(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);   // 55


// 函数重载
// 含义：两个函数如果名称相同，但参数类型、或个数不同，它们就实现了函数重载。
// 意义：无需为功能相似的函数选取不同的函数名，以增强函数的适用性和可读性

// TS 中的函数重载稍有不同：
// 1. 先定义一系列名称相同的函数声明；
// 2. 在一个类型最宽泛的版本中，实现这个重载；

// 示例：
// 某函数支持若干个同一类型的参数，当同为数字时，返回参数之和；同为字符串时，返回所有参数的拼接。

// Mentor:
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
console.log(add8(1, 2, 3))          // 6
console.log(add8('a', 'b', 'c'))    // abc

// DIY:
function MySum(...rest: number[]): number;
function MySum(...rest: string[]): string;
function MySum(...rest: any[]): any {
    return typeof rest[0] === 'number' ? rest.reduce((pre, cur) => (pre + cur)) :
            typeof rest[0] === 'string' ? rest.join("") : undefined;
}
console.log( MySum(1, 2, 3, 4, 5) );            // 15
console.log( MySum('1', '2', '3', 'a', 'b') );  // 123ab

// 注：TypeScript 编译器在处理重载时，会去查询一个重载列表（即 L96 - L97），
// 且会从第一个定义逐一向下尝试匹配，直至匹配成功。
// 因此，应尽量将最容易匹配到的情况写到最前面

// 小结：
// 1. 如何定义函数
// 2. 函数参数
// 3. 函数重载
