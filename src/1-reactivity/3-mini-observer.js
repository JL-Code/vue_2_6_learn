// import observe from "./1-getter-setter";
// import Dep, { autorun } from "./2-dependency-tracking";

const observe = require('./1-getter-setter')
const { Dep, autorun } = require('./2-dependency-tracking')

// 将对象转换为响应式

const dep = new Dep()

const state = {
    count: 0,
    name: "jiangy"
}

observe(state)

// 执行 autorun 收集依赖项 

autorun(() => {
    // dependency-tracking
    dep.depend()
    console.log("state.count: ", state.count)
    // 应该打印 state.count:  0
})

autorun(() => {
    // dependency-tracking
    dep.depend()
    console.log("state.name: ", state.name)
    // 应该打印 state.name:  wangll
})

state.count++
state.name = "wangll"

console.log(state.name, state.count);

dep.notify()
// 应该打印 state.count:  1

// Vue 