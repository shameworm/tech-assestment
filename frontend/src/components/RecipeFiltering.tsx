import { useRecipeFilters } from "../hooks/useRecipeFilters";

export function RecipeFilter() {
  const { ingredient, area, category, handleInput, applyFilter } =
    useRecipeFilters();

  return (
    <>
      <div className="mb-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <input
          type="text"
          placeholder="Ingredient (e.g. chicken_breast)"
          value={ingredient}
          onChange={(e) => handleInput("ingredient", e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Area (e.g. Canadian)"
          value={area}
          onChange={(e) => handleInput("area", e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category (e.g. Seafood)"
          value={category}
          onChange={(e) => handleInput("category", e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={applyFilter}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4 w-full"
      >
        Apply Filter
      </button>
    </>
  );
}
