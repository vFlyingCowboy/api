import { AppDataSource } from "./data-source"
import {Recipes} from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Data Source Logged In!")

}).catch(error => console.log(error))
