const 成績計算 = (input) => {
    if(typeof input !== "number") {
        throw new Error("不正な入力です。入力は数字である必要があります。")
    }
    return input + 1
}
const 成績 = 成績計算("ねこ")
console.log(成績)