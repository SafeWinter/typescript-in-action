# 《`TypeScript` 开发实战》学习笔记

[TOC]

## 11. 类（2）：抽象类与多态 (08:39)

> **抽象类**
>
> ​	只能被继承，不能被实例化的类。用 `abstract` 声明

抽象类是 TS 对 ES 的又一扩展。

### 11.1. 抽象类的性质

抽象类无法实例化

```tsx
// 定义抽象类 Aminal0
abstract class Animal0 {
}
// 抽象类无法实例化：
// let animal = new Animal();  // Error: 无法创建抽象类的实例。
```



抽象类的继承

```tsx
// 定义抽象类 Aminal0
abstract class Animal0 {
}
// 定义 Dog0 来继承抽象类 Animal0:
class Dog0 extends Animal0 {
    constructor(name: string){
        super();    // 必填，否则报错：派生类的构造函数必须包含 "super" 调用。
        this.name = name;
    }
    name: string;
    run() { }
}
```



在抽象类中实现通用方法，供子类直接调用：

```tsx
// 抽象类中可以定义方法并具体实现，之后子类无需重复定义
abstract class AnimalDemo1 {
    eat(){
        console.log( "eating" );
    }
}
class DogDemo1 extends AnimalDemo1 {
    constructor(name: string){
        super();
        this.name = name;
    }
    name: string;
    run() { }
}
// 再通过子类的实例来调用 eat:
let dogDemo1 = new DogDemo1( 'dogDemo' );
dogDemo1.eat();     // eating
```



在抽象类中定义抽象方法（不具体实现），具体实现由子类完成：

```tsx
// 在抽象类中定义抽象方法（不具体实现）
abstract class AnimalDemo2 {
    abstract sleep(): void;
}
// 该方式适用于明确知道某方法有一个或多个子类实现（多态）

// 如定义子类 DogDemo2 继承 AnimalDemo2：
class DogDemo2 extends AnimalDemo2 {
    constructor() {
        super();
    }

    sleep(){
        console.log( 'The dog is sleeping.' );
    }
}
// 通过子类实例调用：
let animal2 : AnimalDemo2 = new DogDemo2();
animal2.sleep();    // The dog is sleeping.
```



### 11.2. TS 中的多态

 综上，抽象类的作用归纳如下：

1. 离事物共性，利于代码复用；
2. 用于实现多态

> **多态**
>
> ​	在父类中定义某个方法，并在多个子类中对该方法进行不同的实现。在程序运行时，会根据不同的对象执行不同的操作，这样就实现了运行时的动态绑定。



多态示例：

```tsx
abstract class AnimalDemo3 {
    abstract sleep(): void;
}
class DogDemo3 extends AnimalDemo3 {
    sleep() {
        console.log( 'Dog sleeps.' );
    }
}
class CatDemo3 extends AnimalDemo3 {
    sleep() {
        console.log( 'Cat sleeps.' );
    }
}
// 定义父类数组 animals：
let dog3 = new DogDemo3();
let cat3 = new CatDemo3();
let aniamls: AnimalDemo3[] = [dog3, cat3];
aniamls.forEach( i => {
    i.sleep();
})
// 运行结果：
// Dog sleeps.
// Cat sleeps.
```

点评：程序执行到 `i.sleep()` 时，会根据实际情况选择性执行某子类的 `sleep()` 方法



### 11.3. TypeScript 中的 this 与链式调用

`this` 中的多态，是指 `this` 既可以指代父类，又可以指代子类。

```tsx
class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}
let this1: WorkFlow = new MyFlow().next().step1().next().step2();     // 保证了子类与父类间接口调用的连贯性
let this2: WorkFlow = new MyFlow().next().step1();
let this3: WorkFlow = new MyFlow().step1();
console.log( this1 );   // MyFlow{}
console.log( this2 );   // MyFlow{}
console.log( this3 );   // MyFlow{}
```

综上，TS 将 ES 中缺失的面向对象语言的特性都补回来了。



### 11.4. 调用被覆写的父类方法（DIY）

```tsx
// DIY 延伸：调用被子类覆写的父类方法。
class Parent {
    work() { 
        console.log('work from Parent'); 
    }
}
class Child extends Parent {
    work() { 
        console.log('work from Child'); 
        return this;
    }
    workParent() {
        super.work();   // 通过 super 调用父类中的方法
        return this;
    }
    // super.work();    // Error: 意外的标记。应为构造函数、方法、访问器或属性。ts(1068)
                        //        仅可在派生类或对象文字表达式的成员中引用 "super"。ts(2660)
}

let person = new Child();
person
    .work()
    .workParent()
    .work();

/* 运行结果：
work from Child
work from Parent
work from Child
*/
```







edited by ***Anton*** -- 23:40 2019/8/20