
var obj = {};
// ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
function convertRectivity(target) {
  let realValue;
  // Object.defineProperty 参数1 原始对象，参数2 属性Key，参数3 descriptor 对象描述符对象
  Object.defineProperty(target, "a", {
    enumerable: true, // 可枚举的，设置为 false，则不会在 for 遍历中出现。
    configurable: true,
    get() {
      // 会覆盖 a 属性的默认的取值行为
      console.log("__get__");
      return realValue;
    },
    set(newValue) {
      console.log("__set__");
      console.log("newValue", newValue);
      realValue = newValue;
    }
  })

  return target;

}

convertRectivity(obj)


console.log(obj.a)
obj.a = 123;
console.log(obj.a)