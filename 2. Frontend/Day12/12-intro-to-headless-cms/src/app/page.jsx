import Image from "next/image";
import { createClient } from "contentful";
import RecipeCard from "@/components/RecipeCard";

async function getReceipt(){
  try{
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: "recipe" });
    const response = await client.getEntries({ content_type: "userCooking" });
    console.log(response.items);
    return res.items;
  }catch(error){
    console.error(error);
  }
}

export default async function Home() {
  const recipes = await getReceipt();
  return (
    <div className="grid grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}
