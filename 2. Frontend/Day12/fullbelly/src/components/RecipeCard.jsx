import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {

  return (
    <article className="flex-1 min-w-[300px]">
      <div className="h-80">
        <Image
          src={recipe.image}
          alt="Thumbnail recipe image"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-8  ">
        <h3 className="text-xl   font-bold    ">{recipe.title}</h3>
        <p className="mb-6">⌛ {recipe.content} minutes to make.</p>
        <Link
          // href={`/receipt/${recipe.id}`}
          className="border-2 border-black px-6 py-3 dark:border-white"
        >
          {recipe.category}
        </Link>
      </div>
    </article>
  );
}
