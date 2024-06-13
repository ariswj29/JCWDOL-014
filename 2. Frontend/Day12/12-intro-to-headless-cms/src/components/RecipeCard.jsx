import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <article className="flex-1 min-w-[300px]">
      <div className="h-80">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="Thumbnail recipe image"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-8  ">
        <h3 className="text-xl   font-bold    ">{title}</h3>
        <p className="mb-6">⌛ {cookingTime} minutes to make.</p>
        <Link
          href={`/receipt/${recipe.sys.id}`}
          className="border-2 border-black px-6 py-3 dark:border-white"
        >
          Cook this
        </Link>
      </div>
    </article>
  );
}
