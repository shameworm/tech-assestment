import { RecipeCard } from "../components/RecipeCard";
import { RecipeFilter } from "../components/RecipeFiltering";
import { useFetchRecipe } from "../hooks/useFetchRecipe";
import { getRecipeTitle } from "../utils/getTitle";

export function RecipeList() {
  const { recipes, loading, error, ingredient, area, category } =
    useFetchRecipe();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {getRecipeTitle({ ingredient, area, category })}
      </h1>
      <RecipeFilter />
      {loading && <p>Loading recipes...</p>}
      {error && <p className="text-red-500">Failed to load recipes.</p>}

      {!loading && !error && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              id={recipe.idMeal}
              name={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          ))}
        </div>
      )}
    </div>
  );
}
