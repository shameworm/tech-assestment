import { useEffect, useState } from 'react';
import { fetchRecipesByCategory } from '../api/recipe-api';

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export function useCategoryRecipes(category?: string) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!category) return;

    const loadCategoryRecipes = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipesByCategory(category);
        setRecipes(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryRecipes();
  }, [category]);

  return { recipes, loading, error };
}
