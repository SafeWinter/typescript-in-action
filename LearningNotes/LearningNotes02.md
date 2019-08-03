# 《`TypeScript` 开发实战》学习笔记



## 02. 类型基础（1）：强类型与弱类型 (04:09)

### 2.0. 早期定义

> **在强类型语言中，当一个对象从调用函数传递到被调用函数时，其类型必须与被调用函数中声明的类型兼容。**
>
> <p align='right'>—— Liskov, Zilles 1974</p>

```js
A() {
    B(x);
}
B(y) {
    // y 可以被赋值 x，程序运行良好
}
```



### 2.1. 强类型语言

> **不允许改变变量的数据类型，除非进行强制类型转换**

示例1：不允许改变数据类型

```java
Class Demo {
    public static void main(String[] args) {
        int a = 1;
        boolean b = true;
        a = b;
        System.out.println( 'a = ' + a );
    }
}
```

执行情况：

```bash
Untitled.java:5: error: incompatible types: boolean cannot be converted to int
		a = b;
		    ^
1 error
Error: Could not find or load main class Untitled
Caused by: java.lang.ClassNotFoundException: Untitled
sandbox> exited with status 0
```

示例2：通过强制类型转换改变变量数据类型

```Java
Class Demo {
    public static void main(String[] args) {
        int a = 1;
        char c = 'a';
        a = c;
        System.out.println( 'a = ' + a );
    }
}
```

执行情况：

```bash
a = 97
sandbox> exited with status 0
```



测试环境：https://tool.lu/coderunner/



### 2.2. 弱类型语言

> **变量可以被赋予不同的数据类型**

示例：

```js
> let x = 1;
let y = true;
let z = 'a';
x = y;
< true
> x = z;
< "a"
```



edited by ***Anton*** -- 22:47 2019/7/28