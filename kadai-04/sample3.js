function hello1(name) {
    console.log("こんにちは、" + "name" + "さん")
}

const hello2 = function(name) {
    console.log("こんにちは、" + "name" + "さん")
}

const hello3 = (name) => {
    console.log("こんにちは、" + "name" + "さん")
}
hello1("田中")
hello2("田中")
hello3("田中")