"use client";
import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";

export default function ClientRecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return <RecipeList recipes={recipes} type="client" />;
}