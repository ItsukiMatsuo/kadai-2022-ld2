//JSON　パースエラー
const jsonstring = '{ "species": "cat", "name": "T'
const cat = JSON.parse(jsonstring)

//JSONはプロパティのキーの文字列は必ずダブルクオーテーション""で囲む必要がある
//プロパティの値として使えるのは、 文字列、数字、真偽値 (true or false)、配列、オブジェクト、null だけ 
//関数や undefined は値として使えない
//文字列はダブルクオーテーションで囲む。シングルクオーテーション '' やバッククオート `` は使えない

const me = {
    name: "小太郎",
    parent: {
        name: "太郎",
        children: []
    }
}
me.parent.children.push(me)
console.log(me.parent.children[0].parent.children[0].parent)