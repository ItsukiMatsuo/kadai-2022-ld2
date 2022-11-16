const fishes = ['アジ', 'サバ', 'ヒラメ', 'マグロ', 'ブリ', 'カレイ', 'サケ']
const sliced1 = fishes.slice(2, 5)
console.log(sliced1)
console.log(sliced1, fishes)
//sliceは元の配列を壊さずにコピーして切り出す非破壊的メソッド

const fishes2 = ['アジ', 'サバ', 'ヒラメ', 'マグロ', 'ブリ', 'カレイ', 'サケ']
const spliced1 = fishes2.splice(3, 3)
console.log(spliced1, fishes2)

