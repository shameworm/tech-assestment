import axios from "axios";
import dotenv from "dotenv";

import { HttpError } from "./http-error";

dotenv.config();

const API_BASE = process.env.API_BASE;

export const getRecipes = async (filter?: {
  ingredient?: string;
  area?: string;
  category?: string;
}) => {
  const { ingredient, area, category } = filter || {};

  try {
    let url = "";

    if (ingredient) {
      url = `${API_BASE}/filter.php?i=${encodeURIComponent(ingredient)}`;
    } else if (area) {
      url = `${API_BASE}/filter.php?a=${encodeURIComponent(area)}`;
    } else if (category) {
      url = `${API_BASE}/filter.php?c=${encodeURIComponent(category)}`;
    } else {
      url = `${API_BASE}/search.php?s=`;
    }
    const response = await axios.get(url);
    return response.data.meals ?? [];
  } catch (error) {
    throw new HttpError("Failed to fetch recipes.", 500);
  }
};

export const getRecipeInfoById = async (id: string) => {
  try {
    let url = `${API_BASE}/lookup.php?i=${id}`;

    const response = await axios.get(url);
    return response.data.meals[0] || null;
  } catch (error) {
    throw new HttpError("Failed to fetch recipe.", 500);
  }
};
