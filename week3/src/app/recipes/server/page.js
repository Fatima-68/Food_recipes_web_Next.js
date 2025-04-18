import RecipeList from "../../components/RecipeList";

async function getRecipes() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes;
}

export default async function ServerRecipeList() {
  const recipes = await getRecipes();
  return <RecipeList recipes={recipes} type="server" />;
}
  