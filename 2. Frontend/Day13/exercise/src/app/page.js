import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";

async function getPhone(){
  try{
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const res = await client.getEntries({ content_type: "phone" });
    console.log(res.items);
    return res.items;
  }catch(error){
    console.error(error);
  }
}

export default async function Home() {
  const phones = await getPhone();

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {phones.map((phone) => (
          <div key={phone.sys.id} className="grid grid-cols-2 h-72 bg-white p-8">
            <div className="">
              <Image
                src={`https:${phone.fields.image.fields.file.url}`}
                alt={phone.fields.image.fields.title}
                width={180}              
                height={180}
              />
            </div>
            <div className="">
              <h4 className="text-2xl font-bold">{phone.fields.name}</h4>
              <p>{phone.fields.subtitle}</p>
              <p className="mb-4">{phone.fields.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
              <Link href={`/phone/${phone.fields.slug}`}>
                <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Detail Phone
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
