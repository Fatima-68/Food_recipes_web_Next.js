"use client";
import useSWR from "swr";
import RecipeList from "../../components/RecipeList";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SWRRecipeList() {
  const { data, error } = useSWR("https://dummyjson.com/recipes", fetcher);

  if (error) return <div>Error loading recipes.</div>;
  if (!data) return <div>Loading...</div>;

  return <RecipeList recipes={data.recipes} type="swr" />;
}