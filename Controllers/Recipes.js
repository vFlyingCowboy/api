import express from 'express';
const router = express.Router();
import {connection} from "../index.js";

router.get('/', async ({res}) =>{
     const sql = 'SELECT * from recipes'
     connection.query(
    {
          sql
     },
     (err, rows) => {
          if (err instanceof Error) {
               console.log(err);
          }
          return res.send(rows)
          // console.log(rows)
     });

     // return res.send({message: "Hello World From Recipes Controller"})
})


export default router;