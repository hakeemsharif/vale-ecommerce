import style from "./newarrivals.module.scss";
import SectionHeader from "@/app/components/common/sectionheader";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/app/libs/getProducts"

export default async function NewArrivals() {

  let products = [];

  try {
    products = await getProducts();
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
    <section className="main-sections">
      <div className={style.new_arrivals}>
        <SectionHeader title="New Arrival" url="products"/>
        <div className={style.card_container}>
          {products
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            .slice(0, 4)
            .map((product) => (
              <Link href={`/products/${product.slug}`} key={product.documentId}>
                <div className={style.card}>
                  <div className={style.container}>
                    <Image
                      src={product.imageURL}
                      // src={`${process.env.STRAPI_URL}` + product.product_image.url}
                      alt="Product Image"
                      width={500}
                      height={500}
                      quality={100}
                      loading="lazy"
                    />
                  </div>

                  <h3 className={style.productName}>{product.Product_Name}</h3>
                  <p className={style.price}>
                    PHP {product.price.toString().replace(/^(\d)/, "$1,")}.00
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
