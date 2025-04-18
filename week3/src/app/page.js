"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">Home Page:</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/recipes/server">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg cursor-pointer text-center">
            View Recipes using Next.js Server Component
          </div>
        </Link>
        <Link href="/recipes/client">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg cursor-pointer text-center">
            View Recipes using Next.js Client Component useEffect Method
          </div>
        </Link>
        <Link href="/recipes/swr">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg cursor-pointer text-center">
            View Recipes using Next.js Server Component SWR Method
          </div>
        </Link>
      </div>
    </div>
  );
}
