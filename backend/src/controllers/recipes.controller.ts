import { Request, Response, NextFunction } from "express";

import { HttpError } from "../model/http-error";
import {
  getRecipes as getRecipesHelper,
  getRecipeInfoById as getRecipeInfoByIdHelper,
} from "../model/recipe.model";

export const getRecipes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { ingredient, area, category } = req.query;

  const filter = {
    ingredient: ingredient ? (ingredient as string) : undefined,
    area: area ? (area as string) : undefined,
    category: category ? (category as string) : undefined,
  };

  try {
    const recipes = await getRecipesHelper(filter);
    res.status(200).json(recipes);
  } catch (error) {
    return next(new HttpError("Failed to fetch recipes 111", 500));
  }
};

export const getRecipeInfoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const recipe = await getRecipeInfoByIdHelper(id);

    if (!recipe) {
      return next(new HttpError("Recipe not found", 404));
    }

    res.status(200).json(recipe);
  } catch (error) {
    return next(new HttpError("Failed to fetch recipe", 500));
  }
};
