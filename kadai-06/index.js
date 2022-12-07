const fs = require('fs')
const json = fs.readFileSync('./kadai-o6/data.json').toString()

let object
try {
    const object = JSON.parse(json)
} catch (error) {
    console.log('不正なJSONフォーマットです')
    process.exit(1)
}

object.count = object.count + 1
object.updateAt = new Date().toISOString()
fs.writeFileSync(
    './kadai-06/data.json',
    JSON.stringify(object)
)