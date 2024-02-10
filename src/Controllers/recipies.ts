import {configDotenv} from "dotenv";
import {AppDataSource} from "../data-source";
import {Recipes} from "../entity/Recipes";
import {Get, Response, Path, Route} from "tsoa";



interface RecipiesResponse {
    "name" : string,
    "ingredients": object,
    "directions": string
}

interface NotFound{
}

configDotenv()

@Route("recipes")
export default class RecipeController {
    @Get('/')
    public async getRecipies() : Promise<RecipiesResponse[]>{
        return await AppDataSource
            .getRepository(Recipes)
            .createQueryBuilder('recipes')
            .select('recipes.name')
            .addSelect('recipes.ingredients')
            .addSelect('recipes.directions')
            .getMany()
    }

    @Response<NotFound>(404, "Not Found")
    @Get("/{id}")
    public async getRecipe(@Path() id?: string) : Promise<Recipes>{
        return  await AppDataSource
            .getRepository(Recipes)
            .createQueryBuilder('recipes')
            .where( {id: id})
            .select('recipes.name')
            .addSelect('recipes.ingredients')
            .addSelect('recipes.directions')
            .getOne()
    }
}




