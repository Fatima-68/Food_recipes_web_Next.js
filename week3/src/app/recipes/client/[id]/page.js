"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import RecipeDetail from "../../../components/RecipeDetail";

export default function ClientRecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;
  return <RecipeDetail recipe={recipe} />;
}
