const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const products = [
    {
        id: 1,
        name:'product1',
    },
    {
        id: 2,
        name:'product2',
    },
    {
        id: 3,
        name:'product3',
    }
]

app.get('/api/products',(req,res)=>{
    res.send({products:products,status:true});
});

app.get('/api/home',(req,res)=>{
    res.send("this is home page api");
});

app.listen(PORT,(req,res)=>{
    console.log(`App is running on ${PORT}`)
});