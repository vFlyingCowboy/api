import express from 'express';
const app = express()
import mysql from 'mysql2';
import dotenv from "dotenv";


import RecipesController from "./Controllers/Recipes.js";

dotenv.config();

app.get('/', (req, res) =>{
    res.send({message: 'Hello World'})
});

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
});

connection.addListener('error', (err) =>{
    console.log(err)
})

app.use('/recipes', RecipesController)

app.listen(3000, ()=>{
    console.log('API Active')
});