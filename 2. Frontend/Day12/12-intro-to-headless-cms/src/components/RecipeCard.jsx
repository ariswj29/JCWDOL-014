import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields;

    return (
        <div>
            <div className="h-80">
                <Image src={`https:${thumbnail.fields.file.url}`} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height} alt={title} className="h-full w-full object-cover" />
            </div>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="mb-4">Takes apprentienly {cookingTime} minutes to cook</p>
                <Link className="bg-cyan-400 p-1 my-8 rounded-lg " href={`/receipt/${slug}`}>Cook This</Link>
            </div>
        </div>
    );
}
