class Person {
    get name () {
        console.log("getterを実行中")
        return "田中"
    }
    set name (value) {
        if(typeof value !== "string") {
            throw new Error("名前には文字列のみが代入できます")
        }
        console.log("setterを実行中")
        this._name = value
    }
}

const person = new Person()
person.name = true
console.log(person.name)