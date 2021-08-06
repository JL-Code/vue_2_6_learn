
// var obj = { name: '蒋勇', id: 1 };
// ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

/**
 * 将原始对象改造成可观察的对象
 * 
 * TODO: 不支持嵌套对象
 * 
 * @param {Object} originalObj 原始对象
 * @returns 一个可观察的对象
 */
function observe(originalObj) {



  Object.keys(originalObj).forEach(key => {
    let internalValue = originalObj[key];

    Object.defineProperty(originalObj, key, {
      get() {
        // 会覆盖 a 属性的默认的取值行为
        // console.debug(`get key:${key} value:${internalValue}`);
        return internalValue;
      },
      set(newValue) {
        // console.debug(`set key:${key} oldValue:${internalValue} newValue:${newValue}`);
        internalValue = newValue;
      }
    })
  })

  return originalObj;

}

module.exports = observe;

// observe(obj)

// obj.id = 123;
// obj.name = 'jiangy';
