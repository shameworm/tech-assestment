import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useRecipeFilters() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [ingredient, setIngredient] = useState(
    searchParams.get('ingredient') ?? ''
  );
  const [area, setArea] = useState(searchParams.get('area') ?? '');
  const [category, setCategory] = useState(searchParams.get('category') ?? '');

  useEffect(() => {
    setIngredient(searchParams.get('ingredient') ?? '');
    setArea(searchParams.get('area') ?? '');
    setCategory(searchParams.get('category') ?? '');
  }, [searchParams]);

  const handleInput = (
    type: 'ingredient' | 'area' | 'category',
    value: string
  ) => {
    setIngredient(type === 'ingredient' ? value : '');
    setArea(type === 'area' ? value : '');
    setCategory(type === 'category' ? value : '');
  };

  const applyFilter = () => {
    const params = new URLSearchParams();
    if (ingredient) params.set('ingredient', ingredient);
    else if (area) params.set('area', area);
    else if (category) params.set('category', category);
    navigate({ search: params.toString() });
  };

  const activeFilter = ingredient
    ? { ingredient }
    : area
      ? { area }
      : category
        ? { category }
        : {};

  return {
    ingredient,
    area,
    category,
    handleInput,
    applyFilter,
    activeFilter,
  };
}
