const score = 72

if (score >= 90) {
    console.log('A')
} else if (score >= 80) {
    console.log('B')
} else if (60 <= score) {
    console.log('C')
} else {
    console.log('F')
}

let sum = 0
for (let index = 1; index <= 1000; index = index + 1){
    sum = sum + index
}
console.log(sum)

//let sum2 = 0
//for (let index = 1; index <= 1000; index = index + 1){
//    if(index % 3 === 1) {
//        sum2 = sum2 + index
//        console.log(index)
//    }
//}
//console.log(sum2)

let sum2 = 0
let index2 = 1
while (index2 <= 1000) {
    if(index2 % 3 === 1) {
        console.log(index2)
        sum2 = sum2 + index2
    }
    index2 = index2 + 1
}
console.log(sum2)