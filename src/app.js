const express=require("express");
const cors=require("cors");
const fs=require("fs/promises");

const app=express();

// Avec app.use => On définit des middlewares qui vont s'appliquer à toutes les routes
app.use(cors())
app.use(express.json())

// On peut aussi créer nos propres middlewares
// Un middleware pour écrire des logs
function logger(req,res,next){
    const logString=`# ${req.method}  ${req.url} Data ${JSON.stringify(req?.body)}, client ${req.headers["user-agent"]}`
   fs.appendFile("./logs.txt",logString+"\n").then(data=>{
       next()
   }).catch(err=>{
       console.log(err)
   })
}

// Ceci est un TP : Tant que tous les champs ne sont pas remplis(name et description).
// Envoyer un message d'erreur que les développeurs frontend vont afficher dans les formulaires
function validateBody(req,res,next){
    const body=req.body;
    const validator={errors:{},isValid:true}
    if(!body.name){
        validator.errors.name="name cannot be empty"
    }

    if(!body.description){
        validator.errors.description="description cannot be empty"
    }

    if(validator.errors.name || validator.errors.description){
        validator.isValid=false;
    }

    if(!validator.isValid){
        return res.status(422).send(validator)
    }

    next()
}

const categories=[{id:1,nom:"Jeux videos"},{id:2,nom:"Ordinateurs portables"}]


app.get("/api/categories",[logger],(req,res)=>{
    res.send(categories)
})

app.get("/api/categories/:id",[logger],(req,res)=>{
    const id=parseInt(req.params.id)
    const category=categories.find(category=>category.id===id);
    if(!category) return res.status(404).send("Category with given id does not exist")
    res.send(category)
})


app.delete("/api/categories/:id",[logger],(req,res)=>{
    const id=parseInt(req.params.id)
    const index=categories.findIndex(category=>category.id===id);
    if(index===-1) return res.status(404).send("Category with given id does not exist")
    categories.splice(index,1)
    res.send("Supprimé avec succès")
})

app.post("/api/categories",[logger,validateBody],(req,res)=>{
    categories.push(req.body)
    res.status(201).send("Catégorie créée avec succès")
})

app.patch("/api/categories/:id",[logger,validateBody],(req,res)=>{
    const id=parseInt(req.params.id)
    const category=categories.find(category=>category.id===id);
    if(!category) return res.status(404).send("Category with given id does not exist")
    Object.assign(category,req.body)
    res.send("Catégorie mis à jour avec succès");
});


app.listen(3000,()=>{
    console.log("Le serveur écoute sur le port 3000!!")
})