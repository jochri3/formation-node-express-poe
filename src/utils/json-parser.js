const {readFile} = require("fs/promises")

module.exports.jsonParser=async(fileName)=>{
    const rawJson=await readFile(fileName,"utf-8");
    return JSON.parse(rawJson);
}