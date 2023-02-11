import express, {Express} from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import router from "./routes";
// import {connectDatabase} from "./database/connection.js"
import errorHandler from './middleware/errorHandler';

const app :Express = express()

dotenv.config({path : '.env'});
console.log(process.env.PORT)
app.use(cors());
app.use(bodyParser.json());

app.use(router)
app.use(errorHandler);
// connectDatabase()

app.listen(process.env.PORT, (): void=> {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
// app.listen(8000, () => {
//     console.log(`Example app listening on port 8000`)
// })