const obj = {
    myKey: 456,
    "my-key": 123,
    hello123: "world",
    'm&m': 'chocolate',
}

console.log(obj.myKey)
console.log(obj["myKey"])

//console.log(obj.my-key)はエラー
console.log(obj["my-key"])

let key = "hello123"
console.log(obj[key])

const hello123 = "myKey"
console.log(obj.hello123)
console.log(obj[hello123])

console.log(obj.myKey)