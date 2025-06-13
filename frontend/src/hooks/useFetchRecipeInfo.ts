import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api/recipe-api';

type RecipeInfoProps = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string]: string | null;
};

export function useFetchRecipeInfo() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeInfoProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRecipe = async () => {
      setLoading(true);
      try {
        if (id) {
          const data = await fetchRecipeById(id);
          setRecipe(data);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadRecipe();
  }, [id]);

  return { recipe, loading, error };
}
