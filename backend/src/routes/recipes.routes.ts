import express from 'express';

import {
  getRecipes,
  getRecipeInfoById,
} from '../controllers/recipes.controller';

export const router = express.Router();

router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipeInfoById);
