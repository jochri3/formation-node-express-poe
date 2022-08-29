const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors())
app.use(express.json())

const categories=[{id:1,nom:"Jeux videos"},{id:2,nom:"Ordinateurs portables"}]



app.get("/api/categories",(req,res)=>{
    res.send(categories)
})

app.get("/api/categories/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const category=categories.find(category=>category.id===id);
    if(!category) return res.status(404).send("Category with given id does not exist")
    res.send(category)
})


app.delete("/api/categories/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const index=categories.findIndex(category=>category.id===id);
    if(index===-1) return res.status(404).send("Category with given id does not exist")
    categories.splice(index,1)
    res.send("Supprimé avec succès")
})

app.post("/api/categories",(req,res)=>{
    categories.push(req.body)
    res.status(201).send("Catégorie créée avec succès")
})

app.patch("/api/categories/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const category=categories.find(category=>category.id===id);
    if(!category) return res.status(404).send("Category with given id does not exist")
    Object.assign(category,req.body)
    res.send("Catégorie mis à jour avec succès");
});


app.listen(3000,()=>{
    console.log("Le serveur écoute sur le port 3000!!")
})