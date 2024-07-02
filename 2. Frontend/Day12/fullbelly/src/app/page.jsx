"use client";

import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:5670/blogs");
        const fetchData = await response.json();
        setData(fetchData);
        console.log("fetchData", fetchData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    console.log("data", data);
    fetchData();
  }, []);

  return (
    <section className="flex flex-wrap gap-8 gap-y-20">
      {data?.data?.map((recipe, key) => (
        <RecipeCard key={key} recipe={recipe} />
      ))}
    </section>
  );
}
