const {readFile,writeFile} = require("fs/promises");


// Le 2 ne peuvent pas être appelé au même moment
(async function(){
    const json=await readFile("./database.json","utf-8");
    const categories=JSON.parse(json);
    const id=Math.floor(Math.random()*999)+1
    categories.push({id,name:"Chaussures"})
    await writeFile("./database.json",JSON.stringify(categories))
})()


(async function(){
    const categories=await readFile("./database.json","utf-8");
    console.log(JSON.parse(categories))
})()