class Person {
    constructor(name) {
        console.log("コンストラクタが実行されました")
        this.name = name
    }
}
const tanaka = new Person("田中")
const yamada = new Person("山田")
console.log(tanaka)
console.log(yamada)

class Character {
    constructor(name, HP, MP) {
        this.name = name
        this.HP = HP
        this.MP = MP
    }
}
const main = new Character("主人公", 100, 50)
const nakama1 = new Character("仲間1", 150, 30)
const nakama2 = new Character("仲間2", 80, 60)
console.log(main)
console.log(nakama1)
console.log(nakama2)
