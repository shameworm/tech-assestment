import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchRecipes } from '../api/recipe-api';

type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export function useFetchRecipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

  const ingredient = searchParams.get('ingredient') ?? undefined;
  const area = searchParams.get('area') ?? undefined;
  const category = searchParams.get('category') ?? undefined;

  useEffect(() => {
    const loadRecipes = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipes({ ingredient, area, category });
        setRecipes(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [ingredient, area, category]);

  return { recipes, loading, error, ingredient, area, category };
}
