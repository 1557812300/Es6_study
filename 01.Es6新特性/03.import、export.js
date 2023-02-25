// 全部导入
import people from './01.1.let-实践案例'

// 将整个模块当作单一的对象进行导入，该模块的所有导出都会作为对象的属性存在
import * as example from './01.1.let-实践案例'
console.log(example.name)
console.log(example.getname)

// 导入部分，引入非default时，使用花括号
import {name,age} from './example'

// 导出默认，有且只有一个默认
export default App

// 部分导出
export class App extends Comment{}