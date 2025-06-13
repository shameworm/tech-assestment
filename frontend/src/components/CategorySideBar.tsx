import { useNavigate } from "react-router-dom";
import { useCategoryRecipes } from "../hooks/useCategoryRecipes";

type CategorySidebarProps = {
  category?: string;
};

export function CategorySidebar({ category }: CategorySidebarProps) {
  const navigate = useNavigate();
  const { recipes, loading, error } = useCategoryRecipes(category);

  if (!category) return null;

  return (
    <aside className="md:col-span-1 border-l pl-6">
      <h2 className="text-2xl font-semibold mb-4">More in {category}</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Failed to load recipes.</p>}

      <ul className="space-y-3">
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <button
              onClick={() =>
                navigate(`/?category=${encodeURIComponent(category)}`)
              }
              className="text-blue-600 underline hover:text-blue-800 text-left"
            >
              {recipe.strMeal}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
