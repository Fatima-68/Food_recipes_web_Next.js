import RecipeDetail from "../../../components/RecipeDetail";

async function getRecipe(id) {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  return data;
}

export default async function ServerRecipeDetail({ params }) {
  const recipe = await getRecipe(params.id);
  return <RecipeDetail recipe={recipe} />;
}
