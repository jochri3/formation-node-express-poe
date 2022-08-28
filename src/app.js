const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors())



app.get("/api/categories",(req,res)=>{
    // res.send("Salut tout le monde")
    const data=[{id:1,nom:"Jeux videos",id:2,nom:"Ordinateurs portables"}]
    res.send(data)
})

app.get("/api/categories/:id",(req,res)=>{
    // res.send("Salut tout le monde")
    console.log("Id : ",req.params.id)
    res.send(`L'id envoyé est ${req.params.id}`)
})


app.listen(3000,()=>{
    console.log("Le serveur écoute sur le port 3000!!")
})