import {AppDataSource} from "./data-source"
import express, {Express, Request, Response, Application} from 'express';
import Router from "./routes/recipiesRouter"
import {configDotenv} from "dotenv";
import swaggerUi from "swagger-ui-express"
import swaggerBuild from "../public/swagger.json"

configDotenv()

const app: Application = express();

const port = process.env.APP_PORT || 3000
app.use(express.json());
app.use(express.static("public"));
app.use("/recipes", Router)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json"
    }
}))

app.get('/', (req: Request, res: Response) => {
    res.send({welcome: "Welcome to the API!"})
})

app.get('/openapi.json', (req: Request, res: Response) => {
    res.send(swaggerBuild)
})

app.listen(port, () => {
    console.log('Expess App up and running')
})

AppDataSource.initialize().then(async () => {
    console.log("Data Source Logged In!")
})
    .catch(error => console.log(error))
