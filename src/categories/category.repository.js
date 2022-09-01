const {writeFile} = require("fs/promises");
const {jsonParser} = require("../utils/json-parser");
const {generateRandomIndex} = require("../utils/random-index");

class CategoryRepository{
    async findAll(){
        return await jsonParser("./database.json");
    }
    async findOne(id){
        const categories=await jsonParser("./database.json");
        return categories[id];
    }
    async createOne(objetCategory){
        const categories=await jsonParser("./database.json");
        const index=generateRandomIndex();
        categories[index]={id:index,...objetCategory};
        await writeFile("./database.json",JSON.stringify(categories))
    }
    async updateOne(id,objetCategory){
        const categories=await jsonParser("./database.json");
        categories[id]=objetCategory;
        await writeFile("./database.json",JSON.stringify(categories))
    }
    async deleteOne(id){
        const categories=await jsonParser("./database.json");
        delete  categories[id];
    }
}

module.exports.categoryRepository=new CategoryRepository();