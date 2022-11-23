const profile = {
    name: "松尾",
    age: 19,
    hobby: "鉄道写真撮影",
    major: "日本史学",
    birthplace: "福井",
   }

const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
    birthplace: "出身地",
}

for (const key of Object.keys(profile)) {
    console.log("私の" + dictionary[key] + "は" + profile[key] + "です")
}