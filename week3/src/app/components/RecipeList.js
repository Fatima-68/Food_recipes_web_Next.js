"use client";
import Link from "next/link";

export default function RecipeList({ recipes, type }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${type}/${recipe.id}`}>
            <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-40 object-cover"
      />
            <div className="bg-white text-black p-4 rounded-lg shadow-lg cursor-pointer">
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <p className="text-gray-600">{recipe.cuisine}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
