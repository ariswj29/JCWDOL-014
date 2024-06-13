import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getPhone(slug){
    try{
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      });
  
      const res = await client.getEntries({ content_type: "phone", "fields.slug": slug });
      console.log(res.items);
      return res.items;
    }catch(error){
      console.error(error);
    }
  }

export default async function Page({params}) {
    const [phones] = await getPhone(params.slug);
    const { name, subtitle, price, description, image, descRichText } = phones.fields;
  
    return (
    <div>
        <h4 className="text-3xl font-bold mb-4">Phone Detail</h4>
        <div className="">            
            <div className="bg-white p-8">
                <Image
                    src={`https:${image.fields.file.url}`}
                    alt={image.fields.title}
                    width={300}              
                    height={300}
                />
                <h4 className="text-2xl font-bold my-2">{name}</h4>
                <p>{subtitle}</p>
                <p className="mb-4">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                {params.slug === "iphone-11" ? (
                    <div className="rich-text">{documentToReactComponents(descRichText)}</div>
                ) : (
                    <p>{description}</p>
                )}
            </div>  
        </div>
    </div>
  );
}