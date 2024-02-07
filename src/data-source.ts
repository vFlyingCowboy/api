import "reflect-metadata"
import { DataSource } from "typeorm"
import { Recipes } from "./entity/Recipes"
import "dotenv"
import {configDotenv} from "dotenv";

configDotenv()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Recipes],
    migrations: [],
    subscribers: [],
})
