const fs = require("fs")
console.log(fs)

fs.writeFileSync("./kadai-08/test.txt", "こんにちは")

const content = fs.readFileSync("./kadai-08/test.txt")
console.log(content.toString())

fs.writeFile("./kadai-08/test2.txt", "こんにちは2", () => {
    console.log("ファイル書き込み完了")
})
console.log("次の行")