import { Link } from "react-router-dom";

type RecipeCardProps = {
  id: string;
  name: string;
  image: string;
};

export function RecipeCard({ id, name, image }: RecipeCardProps) {
  return (
    <Link
      to={`/recipes/${id}`}
      className="block max-w-xs rounded overflow-hidden shadow hover:shadow-lg transition"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </Link>
  );
}
