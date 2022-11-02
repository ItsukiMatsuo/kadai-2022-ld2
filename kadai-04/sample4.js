{
    const x = "hello"
    console.log(x)
}
//console.log(x) //反映されない部分
//定義されたスコープ内でのみ実行される

//{
//    const x = "hello1"
//    console.log("スコープの内側", x)
//    {
//        const y = "hello2"
//        console.log("スコープの内側のスコープの内側", x, y)
//    }
//    console.log("スコープの内側", x, y)
//}
//console.log("スコープの外側", x, y)

let num
for (num = 0; num < 100; num++) {
    const num_sq = num * num
    console.log(num, num_sq)
}
console.log(num)