

# 《`TypeScript` 开发实战》学习笔记



## 04. 编写你的第一个 `TypeScript` 程序 (15:01)

### 4.1. 预装工具

- **Visual Studio Code**（Version: 1.36.1 (user setup)）
- **Node.js**（v6.9.0）



### 4.2. 演练过程

1. 从 `GitHub` 克隆本课课件：

```bash

```

2. 创建文件夹 `ts_in_action` 并初始化，自动生成 `package.json` 文件：







```bash
andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm i typescript -g
C:\Users\andon\AppData\Roaming\npm\tsserver -> C:\Users\andon\AppData\Roaming\npm\node_modules\typescript\bin\tsserver
C:\Users\andon\AppData\Roaming\npm\tsc -> C:\Users\andon\AppData\Roaming\npm\node_modules\typescript\bin\tsc
+ typescript@3.5.3
updated 1 package in 1.048s

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ mkdir src; touch ./src/index.ts

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ echo 'let hello : string = "Hello TypeScript";' >> ./src/index.ts

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ tsc ./src/index.ts

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm i webpack webpack-cli webpack-dev-server -D
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EPERM: operation not permitted, rmdir 'C:\Users\andon\Courses\TypeScript_in_Action\ts_in_action\node_modules\fsevents\node_modules'
npm WARN rollback Rolling back node-pre-gyp@0.12.0 failed (this is probably harmless): EPERM: operation not permitted, rmdir 'C:\Users\andon\Courses\TypeScript_in_Action\ts_in_action\node_modules\fsevents\node_modules'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ts_in_action@1.0.0 No description
npm WARN ts_in_action@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ webpack-cli@3.3.6
+ webpack-dev-server@3.7.2
+ webpack@4.39.0
added 546 packages from 347 contributors and audited 8792 packages in 44.407s
found 0 vulnerabilities


andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ tsc --init
message TS6071: Successfully created a tsconfig.json file.

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ mkdir build

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ cp ../typescript-in-action/sourcecode/ts-base/build/*.js ./build/

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm i ts-loader typescript -D
npm WARN ts_in_action@1.0.0 No description
npm WARN ts_in_action@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ ts-loader@6.0.4
+ typescript@3.5.3
added 9 packages from 21 contributors and audited 8828 packages in 9.094s
found 0 vulnerabilities


andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm i html-webpack-plugin -D
npm WARN ts_in_action@1.0.0 No description
npm WARN ts_in_action@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ html-webpack-plugin@3.2.0
added 49 packages from 68 contributors and audited 8907 packages in 13.619s
found 0 vulnerabilities


andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm i clean-webpack-plugin -D
npm WARN ts_in_action@1.0.0 No description
npm WARN ts_in_action@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ clean-webpack-plugin@3.0.0
added 7 packages from 57 contributors and audited 8962 packages in 8.703s
found 0 vulnerabilities


andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm i webpack-merge -D
npm WARN ts_in_action@1.0.0 No description
npm WARN ts_in_action@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ webpack-merge@4.2.1
added 1 package from 1 contributor and audited 8964 packages in 8.349s
found 0 vulnerabilities


andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ mkdir ./src/tpl

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ touch ./src/tpl/index.html

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm run build

> ts_in_action@1.0.0 build C:\Users\andon\Courses\TypeScript_in_Action\ts_in_action
> webpack --mode=production --config ./build/webpack.config.js

Hash: 2f298063e396e2a42035
Version: webpack 4.39.0
Time: 2566ms
Built at: 2019-08-02 1:21:25 AM
     Asset        Size  Chunks             Chunk Names
    app.js  1010 bytes       0  [emitted]  main
index.html   397 bytes          [emitted]
Entrypoint main = app.js
[0] ./src/index.ts 105 bytes {0} [built]
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [0] ./node_modules/html-webpack-plugin/lib/loader.js!./src/tpl/index.html 565 bytes {0} [built]
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 1 hidden module

andon@Sinosoft-Zhouad MINGW64 ~/Courses/TypeScript_in_Action/ts_in_action
$ npm start

> ts_in_action@1.0.0 start C:\Users\andon\Courses\TypeScript_in_Action\ts_in_action
> webpack-dev-server --mode=development --config ./build/webpack.config.js

i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\Users\andon\Courses\TypeScript_in_Action\ts_in_action
i ｢wdm｣: Hash: 79fbe35208cf2b8a9ef4
Version: webpack 4.39.0
Time: 2698ms
Built at: 2019-08-02 1:22:03 AM
     Asset       Size  Chunks             Chunk Names
    app.js    887 KiB    main  [emitted]  main
index.html  397 bytes          [emitted]
Entrypoint main = app.js
[0] multi (webpack)-dev-server/client?http://localhost ./src/index.ts 40 bytes {main} [built]
[./node_modules/ansi-html/index.js] 4.16 KiB {main} [built]
[./node_modules/html-entities/index.js] 231 bytes {main} [built]
[./node_modules/loglevel/lib/loglevel.js] 7.68 KiB {main} [built]
[./node_modules/querystring-es3/index.js] 127 bytes {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost] (webpack)-dev-server/client?http://localhost 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.51 KiB {main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.77 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.63 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] (webpack)-dev-server/node_modules/strip-ansi/index.js 161 bytes {main} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {main} [built]
[./src/index.ts] 105 bytes {main} [built]
    + 18 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [./node_modules/html-webpack-plugin/lib/loader.js!./src/tpl/index.html] 565 bytes {0} [built]
    [./node_modules/lodash/lodash.js] 528 KiB {0} [built]
    [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
    [./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {0} [built]
i ｢wdm｣: Compiled successfully.


```





edited by ***Anton*** -- 1:41 2019/7/29

