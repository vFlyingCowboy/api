import {configDotenv} from "dotenv";
import {AppDataSource} from "../data-source";
import {Recipes} from "../entity/Recipes";
import {Get, Route} from "tsoa";

// interface RecipiesResponse {
//     [recipes: string] : any;
// }t

configDotenv()

@Route("recipes")
export default class RecipeController {
    @Get('/')
    public async getRecipies() : Promise<Recipes[]>{
        return await AppDataSource
            .getRepository(Recipes)
            .createQueryBuilder('recipes')
            .getMany()
    }
}


