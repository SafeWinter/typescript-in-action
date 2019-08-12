# 《`TypeScript` 开发实战》学习笔记

## 极客时间·梁宵

本学习笔记为梁宵老师在极客时间推出的 `TypeScript` 视频课程的每课要点记录，旨在加深理解，以便后期查阅。



## 01. 重塑“类型思维” (07:04)

> 你好，我是梁宵，先后就职于百度和搜狗，目前负责广告平台的研发和技术管理工作，也是《hapi.js 实战》和《`JavaScript ES6` 函数式编程》的译者。



### 1.1. TypeScript缘起



在过去的十年里，我一直从事前端开发工作，亲自见证了 **Atwood 定律**，那就是：

> **Any application that can be written in JavaScript, will eventually be written in JavaScript.** 
>
> 任何能用 `JavaScript` 实现的应用，最终都会用 JavaScript 实现。



如今，从移动终端到后端服务，从 IoT 到神经网络，它几乎无处不在。如此广阔的应用领域，自然对语言的安全性、健壮性和可维护性有更高的要求。

尽管 `ECMAScript` 标准在近几年有了长足的进步，但在类型检查方面依然无所建树。你是否经常遇到这样的场景：

> <font color="orange">**场景一**</font>
>
> 你调用一个别人写的函 数，但是很不幸，这个家伙没有留下任何注释，为了搞清楚参数类型，你只能硬着头皮去看里面的逻辑。

> <font color="orange">**场景二**</font>
> 为了保证代码的健壮性，你很有责任心，对一个函数的输入参数进行各种假设，最终给老板盛上了一碗香喷喷的意大利面。

> <font color="orange">**场景三**</font>
>
> 领导看好你，让你维护一个重要的底层类库，你殚精竭虑，优化了一个参数类型，但不知道有多少处引用，在提交代码前，是否感到脊背发凉？

> <font color="orange">**场景四**</font>
>
> 明明定义好了接口，可一联调就报错了：**“TypeError: Cannot read property 'length' of undefined”**，于是你怒气冲冲地去找后端理论：“嘿，哥们儿！这个字段是数组！这个字段是数组！这个字段是数组！”



以上情况归根结底，是因为 `JavaScript` 是一门动态弱类型语言，对变量的类型非常宽容，而且不会在这些变量和它们的调用者间建立结构化的契约。如果你长期在没有类型约束的环境下开发，就会造成“类型思维”的缺失，养成不良的编程习惯，这也是做前端开发的短板之一，值得我们警醒。

令人庆幸的是，开源社区一直在努力解决这个问题。

早在 2014 年， **Facebook** 就推出了 `Flow`，**微软**在同年也发布了 `TypeScript` 的 1.0 版本。它们都致力于为 `JavaScript` 提供**静态类型检查**。五年过后，显然 `TypeScript` 发展得更好一些，多个团队（比如 `Angular` 和 `Vue`）开始全面使用 `TypeScript` 重构代码，甚至连 **Facebook** 自家的产品（比如 `Jest` 和 `Yarn`）都在从 `Flow` 向 `TypeScript` 迁移。可以说，在 ES 标准推出静态类型检查前，`TypeScript` 是当下解决此问题的最佳方案。



### 1.2. 什么是 `TypeScript`

那么，什么是 `TypeScript`，根据官方的定义，它是拥有类型系统的 `JavaScript` 的超集，可以编译成纯 `JavaScript`。

这里，你要注意三个要点：

> <font color="orange">**第一，类型检查**</font>
> TypeScript 会在编译代码时进行严格的静态类型检查，这意味着你可以在编码阶段发现可能存在的隐患，而不必把它们带到线上。

> <font color="orange">**第二，语言扩展**</font>
> TypeScript 会包括来自 ECMAScript 6 和未来提案中的特性，比如异步操作和装饰器；也会从其他语言借鉴某些特性，比如接口和抽象类。

> <font color="orange">**第三，工具属性**</font>
> TypeScript 能够编译成标准的 JavaScript，可以在任何浏览器、操作系统上运行，无需任何运行时的额外开销。从这个角度上讲，TypeScript 更像是一个工具，而不是一门独立的语言。



### 1.3. 为什么要使用 `TypeScript`

使用 `TypeScript` 还能带来其他好处。比如，`Visual Studio Code` 具有强大的**自动补全**、**导航**和**重构**功能，这使得**接口定义可以直接代替文档**，同时也提高了开发效率，降低了维护成本。更重要的是，`TypeScript` 可以帮助团队重塑**“类型思维”**，接口提供方将被迫去思考 API 的边界，他们将从代码的**编写者**蜕变为代码的**设计者**。
	
如果说 `JavaScript` 是一匹野马，那么 `TypeScript` 就是束缚这匹野马的缰绳。作为骑士的你，自然可以张开双臂，放飞自我，但如果不是技艺超群，恐怕会摔得很惨。然而如果抓住了缰绳，你即可闲庭信步，亦可策马扬鞭。这就是 `TypeScript` 的价值，它会让你在前端开发之路上走得更稳，走得更远。



### 1.4. 内容设计思路

这门课程分为**三大模块**：

> <font color="orange">**模块一，基础篇**</font>
> 我会为你详细解读 `TypeScript` 的每个特性，它能解决什么问题？与 JavaScript 的区别在哪里？一步一步带你重塑“类型思维”。

> <font color="orange">**模块二，工程篇**</font>
> 学习了语法仍然做不好项目吗？这是因为 `TypeScript` 理论和实际开发之间仍然存在不小的鸿沟，让很多初学者望而生畏。别担心，在这一部分我将为你趟平它。

> <font color="orange">**模块三，实战篇**</font>
> 我将手把手带你开发四个典型的应用案例，加深你对相关概念的理解。



### 1.5. 适合人群

本课程适于具备一定 `ECMAScript 6` 基础的终端开发者以及对 `TypeScript` 感兴趣的同学，你将全面了解 `TypeScript` 的核心知识与应用场景。



### 1.6. 课程目标

学完这门课程后，我希望能在你的脑中播下**“类型思维”**的种子。

因为**思维方式决定了编程习惯，编程习惯奠定了工程质量，工程质量划定了能力边界。**

面对越来越复杂的前端应用，`TypeScript` 所提供的思维方法，能够让你在未来的开发中长期受益。因此，这门课程的重点不仅在于讲解 `TypeScript` 的知识点和实战应用，更在于训练你的思维。

如果你曾饱受动态类型带来的困扰，并愿意为此做出一些改变，那么现在就加入这门 `TypeScript` 实战课程吧。

我是梁宵，我在极客时间等你。



edited by ***Anton***  21:47 2019/7/28