import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function fetchRecipes(params?: {
  ingredient?: string;
  area?: string;
  category?: string;
}) {
  const response = await api.get("/recipes", { params });
  return response.data;
}

export const fetchRecipeById = async (id: string) => {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
};

export const fetchRecipesByCategory = async (category: string) => {
  const response = await api.get(
    `/recipes?category=${encodeURIComponent(category)}`
  );
  return response.data;
};
