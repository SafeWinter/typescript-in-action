# 《`TypeScript` 开发实战》学习笔记

[TOC]

## 07. 接口（1）：对象类型接口 (09:57)

### 7.1. 接口的含义

> 用于约束函数、对象、类的结构和类型，是一种必须遵守的代码协作的契约，不可更改。



> **示例场景1**

从后端获取数据并渲染到前端页面。



定义接口如下：

```typescript
// 元素级接口
interface List {
    id: number;
    name: string;
}

// 结果对象接口
interface Result {
    data: List[]
}

// 渲染函数
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
    })
}

// 结果示例
let result = {
    data: [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'}
    ]
}
render(result)
/* 控制台结果：
1 "A"
2 "B"
*/
```



拓展：返回结果包含无关数据（编译不报错）

```typescript
// 变通1：返回结果包含无关数据（编译不报错）
let result1 = {
    data: [
        {id: 1, name: 'A', sex: 'male'},    
        {id: 2, name: 'B'}
    ]
}
render(result1)
/* 控制台结果：
1 "A"
2 "B"
*/
```

> **原因**
>
> TS 采用了一种“鸭式变形”法，这是一种动态语言的类型风格（一只鸟如果看起来像鸭子、游起来像鸭子、叫起来像鸭子，那么这只鸟就可以被认为是鸭子）
> 只要传入的对象满足接口定义的必要条件，即使传入多余的字段，也是允许的，也可以通过类型检查。



但若直接传入对象字面量作渲染函数的参数，则会报错：

```typescript
// 但若直接传入对象字面量作渲染函数的参数，则会报错：
render({
    data: [
//      {id: 1, name: 'A', sex: 'male'},    // Error: 不能将类型“{ id: number; name: 
        									// string; sex: string; }”分配给类型“List”。
                                            // 对象文字可以只指定已知属性，并且“sex”不在类型
                                            // “List”中。
        {id: 2, name: 'B'}
    ]
})
```



上述情况有三种解决方法：

1. 通过==**变量传参**==（如上例）
2. 通过==**类型断言**== as
3. 通过==**字符串索引签名**==



类型断言方式示例：

```typescript
render({
    data: [
        {id: 1, name: 'A', sex: 'male'},    
        {id: 2, name: 'B'}
    ]
} as Result);
// 或使用 <...>
render(<Result>{
    data: [
        {id: 1, name: 'A', sex: 'male'},    
        {id: 2, name: 'B'}
    ]
})
// 推荐使用前者，以避免在 React 中产生的歧义
```



通过字符串索引签名示例：

```typescript
interface List1 {
    id: number;
    name: string;
    [x: string]: any;   // 含义：用任意字符串索引 List1，得到任意类型的值。由此，List1 可支持多个属性
}
```



### 7.2. 接口成员的属性

#### 7.2.1. 可选属性

> **场景示例2**

判定返回值对象中是否包含某个属性，有则打印到控制台。

```typescript
interface List2 {
    id: number;
    name: string;
    age?: number;   // ? 表示该属性可选
}

interface Result2 {
    data: List2[];
}

function render2 (result: Result2) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if(value.age) {
            console.log(value.age);
        }
    });
}

let result2 = {
    data: [
        {id: 1, name: "A", sex: "male"},    // 通过变量新增 sex 属性，不会报错
        {id: 2, name: "B", age: 15}         // 使用可选属性，编译也不报错
    ]
}
render(result2);
```



#### 7.2.2. 只读属性

```typescript
interface List3 {
    readonly id : number;
    name: string;
}

// 只读属性不可修改：
let result3 : List3 = {
    id: 1,
    name: 'Demo'
}
// result3.id++;   // Error: Cannot assign to 'id' because it is a read-only property.
```



#### 7.2.3. 可索引类型的接口

> **适用场景**
>
> 接口的属性个数不确定时

这类接口可以用**==数字==**去索引，也可以用**==字符串==**去索引



1. 用数字索引的接口

```ts
interface StringArray {
    [index: number]: string     // 含义：用任一数字去索引 StringArray，都会得到一个 string
                                //      相当于声明了一个字符串数组
}

let chars: StringArray = ['A', 'B'];
```



> **扩展**
>
> 既然是任意数字，那索引值可以为小数吗？

```ts
let arr : StringArray[] = [];

for(let i = 0; i < 3; i++) {
    arr[ i / 10 ] = `elem${i}`;
}

for(let j in arr) {
    if(arr[j]) {
        console.log(`j: ${j}, arr[j]: ${arr[j]}`);
    }
}
// 结果：
// j: 0, arr[j]: elem0
// j: 0.1, arr[j]: elem1
// j: 0.2, arr[j]: elem2
```



2. 用字符串索引的接口

```ts
interface Names {
    [x: string]: string;
}
```

此时不可指定非 string 的属性：

```tsx
interface Names1 {
    [x: string]: string;
    // y: number;      // Error: 类型“number”的属性“y”不能赋给字符串索引类型“string”。
}
```

但可以指定不同类型的属性签名：

```tsx
interface Names2 {
    [x: string]: string;
    [y: number]: string;
}
```

注意：用 y 索引的结果必须是上面 x 的返回值类型的子集，否则报错：

```tsx
interface Names3 {
    [x: string]: string;
    // [y: number]: number;    // Error: 数字索引类型“number”不能赋给字符串索引类型“string”。
}
// 原因：JavaScript 会对索引值执行类型转换，将 number 转为 string，以保证类型的兼容性。
```

上述定义的变通方法 ———— x 索引结果改为 any 型：

```tsx
interface Names4 {
    [x: string]: any;
    [y: number]: number;
}
```





edited by ***Anton*** -- 23:04 2019/8/12