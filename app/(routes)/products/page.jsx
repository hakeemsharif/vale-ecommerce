import style from "./products.module.scss";
import ItemCard from "@/app/components/common/ItemCards";
import { getData } from "@/app/libs/getData";

export const metadata = {
  title: "VALE | Products",
  description: "A simple ecommerce website using Next.JS, Strapi, and Snipcart",
  keywords: ["next.js", "react", "metadata"],
  authors: [{ name: "Hakeem S." }],
};

export default async function ProductsPage() {
  let data = [];

  try {
    data = await getData("products");
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
    <section className={style.products}>
      <h1>Products</h1>
      <ItemCard data={data} />
      {/* <div className={style.container}>
            <button className={style.button}>Show More</button>
        </div> */}
    </section>
  );
}
