const express=require("express");

const app=express();



app.get("/api/categories",(req,res)=>{
    // res.send("Salut tout le monde")
    const data=[{id:1,nom:"Jeux videos",id:2,nom:"Ordinateurs portables"}]
    res.send(data)
})


app.listen(3000,()=>{
    console.log("Le serveur écoute sur le port 3000!!")
})