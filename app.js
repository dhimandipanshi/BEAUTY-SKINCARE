const express= require('express');
const mongoose= require('mongoose');
const path= require('path')

const app= express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,'public')));

//view engine
app.set("view engine","ejs");

//connect to mongoose


app.get("/",(req,res)=>{
    res.render("login")
})

//routes
// const productRoutes= require('./routes/products');
// app.use('/products',productRoutes);


app.listen(3000);