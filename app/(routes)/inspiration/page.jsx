import style from "./inspiration.module.scss";
import Image from "next/image";

export const metadata = {
  title: 'VALE | Inspiration',
  description: 'A simple ecommerce website using Next.JS, Strapi, and Snipcart',
  keywords: ['next.js', 'react', 'metadata'],
  authors: [{ name: 'Hakeem S.' }],
}

async function getInspiration() {
  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/inspirations?populate=*`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch images: ${res.status}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return null;
  }
}

export default async function InspirationPage() {
  const data = await getInspiration();

  if (!data) {
    return <p>Sorry, we couldn't load the products. Please try again later.</p>;
  }

  return (
    <section className={style.inspiration}>
      <h1>Inspiration</h1>

      <div className={style.gallery}>
        {/* {data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((inspiration) => ( */}
        {data.map((inspiration) => (
          <Image
            src={inspiration.imageURL}
            // src={`${process.env.STRAPI_URL}${inspiration.inspiration_image.url}`}
            alt="Inspiration Image"
            width={500}
            height={500}
            quality={100}
            key={inspiration.id}
          />
        ))}
      </div>
    </section>
  );
}
