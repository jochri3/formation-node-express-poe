const {categories} = require("../database");


class CategoryController{
    findAll(_,res){
        res.send(categories)
    }

    findOne({params},res){
        const id=parseInt(params.id)
        const category=categories.find(category=>category.id===id);
        if(!category) return res.status(404).send("Category with given id does not exist")
        res.send(category)
    }


    deleteOne({params},res){
        const id=parseInt(params.id)
        const index=categories.findIndex(category=>category.id===id);
        if(index===-1) return res.status(404).send("Category with given id does not exist")
        categories.splice(index,1)
        res.send("Supprimé avec succès")
    }


    createOne({body},res){
        categories.push(body)
        res.status(201).send("Catégorie créée avec succès")
    }


    updateOne({params,body},res){
        const id=parseInt(params.id)
        const category=categories.find(category=>category.id===id);
        if(!category) return res.status(404).send("Category with given id does not exist")
        Object.assign(category,body)
        res.send("Catégorie mis à jour avec succès");
    }
}



module.exports.CategoryController=CategoryController