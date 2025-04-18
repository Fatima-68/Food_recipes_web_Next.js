![image](https://github.com/user-attachments/assets/4da5edeb-7b35-442c-8c73-37e335867564)
![image](https://github.com/user-attachments/assets/1fb293a3-9b75-4146-a2ff-4684d8cb81de)
![image](https://github.com/user-attachments/assets/32121121-d1aa-4f41-966b-3530ded66455)

🍲** Food Recipes App – Next.js + Tailwind CSS**
📌 Description:
This is a dynamic web application built using Next.js and styled with Tailwind CSS that allows users to:

View a list of food recipes using three different data-fetching methods

Click on a recipe to see detailed instructions and ingredients

Learn how Next.js Client Components, Server Components, and the useEffect & SWR hooks are used to handle data in different ways

✨ Features:
Recipe list displayed using:

✅ Server Component (Server-side rendered)

✅ Client Component with useEffect

✅ Client Component with SWR

Detailed recipe view using dynamic routing

Clean, responsive design

Modular components for easy scalability

📖 How It Works:
🏠 Homepage
Displays 3 buttons:

"View Recipes using Server Component"

"View Recipes using Client Component (useEffect)"

"View Recipes using SWR"

Each button links to a page that fetches and displays recipes using the corresponding method.

🧠 Hooks and Rendering Techniques
🔹 1. Server Component
Uses async/await and fetch() directly in the component

Recipe data is fetched on the server before rendering

Great for SEO and performance

🔹 2. Client Component with useEffect
Fetches recipe data after the component mounts using React’s useEffect hook

Useful for client-side interactivity and runtime data fetching

🔹 3. Client Component with SWR
Uses the SWR hook to fetch and revalidate data

Improves performance with caching and background updates

🧾 Dynamic Routing for Recipe Details
Clicking on a recipe navigates to /recipes/[method]/[id]

Fetches one recipe’s detail using the ID

Shows:

Recipe image

Name

Cuisine

Ingredients

Instructions

🛠 Tech Stack
Next.js 13+ (App Router)

Tailwind CSS

React Hooks (useState, useEffect)

SWR for optimized data fetching

Dynamic Routes for recipe detail pages



