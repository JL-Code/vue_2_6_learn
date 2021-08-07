class Dep {
    constructor() {
        this.subscribers = new Set()
    }

    depend() {
        if (activeUpdate) {
            // 注册当前 activeUpdate （运行的函数）称为一个订阅者
            this.subscribers.add(activeUpdate)
        }
    }

    notify() {
        // 遍历执行 activeUpdate subscriber
        this.subscribers.forEach((sub) => sub())
        console.log('subscribers ', this.subscribers)
    }
}

// 使用 activeUpdate 用于标识函数运行状态（js 是单线程）
let activeUpdate

function autorun(update) {
    // 实现函数

    function wrappedUpdate() {
        activeUpdate = wrappedUpdate

        update()

        activeUpdate = null
    }

    wrappedUpdate()
}

// 依赖跟踪边缘情况：变量提升、属性新增、清理没有引用的依赖项。

// autorun(() => {
//     console.log(Date.now())
// })

module.exports.Dep = Dep
module.exports.autorun = autorun
