import style from "./itemcard.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ data }) {
  return (
    <div className={style.card_container}>
      {data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
                  placeholder="blur"
                  blurDataURL={product.blurDataURL}
                />
              </div>
              <h3 className={style.productName}>{product.Product_Name}</h3>
              {/* AI Assist - Adding comma to the price*/}
              <p className={style.price}>
                PHP{" "}
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                .00
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
