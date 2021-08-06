var obj = { a: { c: 1, b: { d: 2 } } }

Object.keys(obj).forEach(key => {
  console.log(key);
});