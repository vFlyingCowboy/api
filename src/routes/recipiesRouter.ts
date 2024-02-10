import express from "express";
import RecipeController from "../Controllers/recipies";

const router = express.Router();

router.get("/", async (_req, res) => {
    const controller = new RecipeController();
    const response = await controller.getRecipies();
    return res.send(response);
});

router.get("/:id", async (_req, res) => {
    const controller = new RecipeController();
    const response = await controller.getRecipe(_req.params.id);
    if(response === null){
        return res.status(404).send({detail: "Not Found"})
    }

    return res.send(response);

});

export default router;