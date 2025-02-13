import style from "./inspiration.module.scss";
import Image from "next/image";
import { getData } from "@/app/libs/getData";

export const metadata = {
  title: "VALE | Inspiration",
  description: "A simple ecommerce website using Next.JS, Strapi, and Snipcart",
  keywords: ["next.js", "react", "metadata"],
  authors: [{ name: "Hakeem S." }],
};

export default async function InspirationPage() {

  // Empty array is initialized to store the data
  let data = [];

  try {
    data = await getData("inspirations");
  } catch (error) {
    return (
      <section className="main-sections">
        <div className={style.new_arrivals}>
          <p>Sorry, we couldn't load the products. Please try again later.</p>
        </div>
      </section>
    );
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
            placeholder="blur"
            blurDataURL={inspiration.blurDataURL}
          />
        ))}
      </div>
    </section>
  );
}
