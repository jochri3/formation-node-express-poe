const express=require("express");
const cors=require("cors");
const {CategoryRouter} = require("./categories/category.router");
const app=express();
app.use(cors())
app.use(express.json())
app.use("/api/categories",CategoryRouter)
app.listen(3000,()=>{
    console.log("Le serveur écoute sur le port 3000!!")
})


