// 將 a.js 的 export default 引用近來，取名為 a
// import 變數 from 來源
// from 'a.js'     ---> 引用 a.js 套件
// from './a.js'   ---> 引用 a.js 檔案
// import 必須要在檔案最上面
import a from './a.js'

// 一次引用所有 export，取名為 b
import * as b from './b.js'

// 只引用 b1
import { b1, b2 } from './b.js'

// 只引用 b1，用 as 重新取名為 bb1
import { b1 as bb1 } from './b.js'

// 引用 export default 取名為 c
// 引用所有 export 取名為 cc
import c, * as cc from './c.js'

// 只取用 export c1 取名為 cc1
import { c1 as cc1 } from './c.js'

console.log('index - a.a1：' + a.a1)
console.log('index - a.add：' + a.add())

a.a1 = 100
a.a2 = 100
// a.a3 = 100
a.test(500)
a.a4.push(300)
console.log('index - a.a1：' + a.a1)
console.log('index - a.a2：' + a.a2)
console.log('index - a.a3：' + a.a3)
console.log('index - a.a4：' + a.a4)
a.BBB()

console.log('index - b.b1：' + b.b1)
console.log('index - b1：' + b1)
console.log('index - bb1：' + bb1)
// 具名引用進來的檔案，會是 Readonly，不能用 = 換掉值

// b.b1 = 100
// 上述賦值，會出現錯誤 → TypeError: Cannot assign to read only property 'b1' of object '[object Module]'

// b1 = 100
// 單獨引用的會是 const，不能用 = 換掉值
// 會出現錯誤 → TypeError: Assignment to constant variable.

b.test(400)
b.b4.push(900)
console.log('index - b.b4：' + b.b4)
// console.log('index - b4：' + b4)
b.BBB()

console.log('index - c.c3：' + c.c3)
console.log('index - cc.c1：' + cc.c1)
