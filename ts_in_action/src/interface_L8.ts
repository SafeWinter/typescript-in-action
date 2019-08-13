// 定义函数的方式：
// 1. 通过变量定义
let addNum: (x: number, y: number) => number;

// 2. 通过接口定义
interface AddFunc {
    (x: number, y: number): number;
}

// 3. 通过类型别名
type AddNum1 = (x: number, y: number) => number;
// 具体实现
let addNum1:AddNum1 = (a, b) => (a + b);

// 4. 混合接口
// 含义：既可以定义函数（方法），又拥有属性的接口。
interface Lib {
    (): void;
    version: string;
    doSomething():void;
}

// 用变量实现 Lib 接口：
let lib1: Lib = (() => console.log('This is a lib.')) as Lib;
lib1.version = '1.0';
lib1.doSomething = ()=> console.log('Do something.');

// 问题：对全局暴露了变量 lib1，它是一个单例。改进：
function getLib(){
    let lib: Lib = (
        ()=> {
            console.log('This is a lib.');
        }
    ) as Lib;
    lib.version = '2.0';
    lib.doSomething = () => console.log('Do another thing.');

    return lib;
}

// 用变量实现：
let lib2 = getLib(),
    lib3 = getLib();
console.log(`lib2 === lib3: ${lib2 === lib3}`);
lib2.doSomething();
lib3.doSomething();

// 运行结果：
// lib2 === lib3: false
// Do another thing.
// Do another thing.
