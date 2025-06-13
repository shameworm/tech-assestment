export function getRecipeTitle({
  ingredient,
  area,
  category,
}: {
  ingredient?: string;
  area?: string;
  category?: string;
}) {
  if (ingredient) return `Recipes with "${ingredient}"`;
  if (area) return `Recipes from "${area}"`;
  if (category) return `Recipes in "${category}" category`;
  return 'All Recipes';
}
