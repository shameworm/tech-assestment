import { useNavigate } from "react-router-dom";
import { useFetchRecipeInfo } from "../hooks/useFetchRecipeInfo";
import { CategorySidebar } from "../components/CategorySideBar";
export function RecipeInfoPage() {
  const { recipe, loading, error } = useFetchRecipeInfo();
  const navigate = useNavigate();

  if (loading) return <p className="p-4">Loading...</p>;
  if (error || !recipe)
    return <p className="p-4 text-red-600">Recipe not found.</p>;

  const ingredients = Object.entries(recipe)
    .filter(
      ([key, value]) => key.startsWith("strIngredient") && value && value.trim()
    )
    .map(([key, value]) => {
      const index = key.replace("strIngredient", "");
      const measure = recipe[`strMeasure${index}`] || "";
      return {
        ingredient: value as string,
        measure: measure as string,
      };
    });

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-3">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded shadow-md w-full max-w-xs mx-auto md:mx-0"
          />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-4xl font-bold">{recipe.strMeal}</h1>
            {recipe.strArea && (
              <p
                className="text-blue-600 underline mt-2 cursor-pointer"
                onClick={() => navigate(`/?area=${recipe.strArea}`)}
              >
                {recipe.strArea}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto md:mx-0">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="whitespace-pre-line text-gray-800">
            {recipe.strInstructions}
          </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto md:mx-0">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-1">
            {ingredients.map(({ ingredient, measure }, index) => (
              <li key={index}>
                <button
                  onClick={() => navigate(`/?ingredient=${ingredient}`)}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {ingredient}
                </button>{" "}
                - {measure}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CategorySidebar category={recipe.strCategory} />
    </div>
  );
}
