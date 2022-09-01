const {categoryRepository} = require("./category.repository");

class CategoryService{
    constructor(categoryRepository) {
        this.categoryRepository=categoryRepository;
    }
    findAll(){
        return this.categoryRepository.findAll()
    }
    async findOne(id){
         const category=await this.categoryRepository.findOne(id)
        console.log("Valeur : ",category)
        if(!category) throw new Error(`Cannot find category with id ${id}`)
        return category;
    }
    createOne(objectCategory){
        return this.categoryRepository.createOne(objectCategory)
    }
    async updateOne(id,objectCategory){
        const category=await this.categoryRepository.findOne()
        if(!category) throw new Error(`Cannot find category with id ${id}`)
        return this.categoryRepository.updateOne(id,objectCategory);
    }
    async deleteOne(id){
        const category=await this.categoryRepository.findOne()
        if(!category) throw new Error(`Cannot find category with id ${id}`);
        return this.categoryRepository.deleteOne(id)
    }
}


module.exports.categoryService=new CategoryService(categoryRepository);