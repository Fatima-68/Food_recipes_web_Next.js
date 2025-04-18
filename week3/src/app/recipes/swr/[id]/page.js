"use client";
import useSWR from "swr";
import { useParams } from "next/navigation";
import RecipeDetail from "../../../components/RecipeDetail";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SWRRecipeDetail() {
  const { id } = useParams();
  const { data: recipe, error } = useSWR(`https://dummyjson.com/recipes/${id}`, fetcher);

  if (error) return <div>Error loading recipe.</div>;
  if (!recipe) return <div>Loading...</div>;

  return <RecipeDetail recipe={recipe} />;
}
