"use client";
import { useRouter } from "next/navigation";

export default function RecipeDetail({ recipe }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button onClick={() => router.back()} className="mb-4 text-blue-400">
        Go Back
      </button>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.name}</h1>
        <p className="text-lg text-gray-400">{recipe.cuisine}</p>

        <h2 className="text-2xl font-semibold mt-4">Ingredients</h2>
        <ul className="list-disc ml-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}
