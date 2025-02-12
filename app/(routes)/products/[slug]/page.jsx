import style from "./product.module.scss";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ProductTab from "@/app/components/common/ProductTab";
import NotFound from "./not-found";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

export async function generateMetadata({ params }){
  const { slug } = await params;
  
  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
    );
    
    if (!res.ok) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found'
      };
    }

    const response = await res.json();
    const product = response.data[0];
  
    if (!product) {
      return {
        title: 'Product Not Found',
        description: 'The requested product could not be found'
      };
    }

    return {
      title: `VALE | ${product.Product_Name}`,
      description: `Shop ${product.Product_Name} - ${product.category} at VALE Price: PHP ${product.price}`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'VALE | Product',
      description: 'Shop our collection of clothing and accessories'
    };
  }
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/products?populate=*`);
  const data = await res.json();

  return data.data.map((data) => ({
    slug: data.slug,
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const res = await fetch(`${process.env.STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`);

  if (!res.ok) {
    return <p>Failed to Fetch Data</p>;
  }

  // AI Assist
  // Strapi returns data in an array, we need the first item
  const response = await res.json();
  const product = response.data[0];

  if (!product) {
    return <NotFound />
  }

  return (
    <section className={style.page}>
      <div className={style.image}>
        <Image
          src={product.imageURL}
          // src={`${process.env.STRAPI_URL}` + product?.product_image.url}
          alt="Product Image"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className={style.details}>
        <span>{product.category}</span>
        <h2 className={style.price}>
          PHP {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h2>
        <h3 className={style.price}>{product.Product_Name}</h3>
          
          <button className={`${style.add} snipcart-add-item`} 
              data-item-id={product.documentId}
              data-item-url={`/products/${product.slug}`}
              data-item-price={product.price}
              data-item-image={product.imageURL}
              data-item-name={product.Product_Name}>
            Add to cart
          </button>

        <div className={style.description}>
          {product.description ? (
            <BlocksRenderer content={product.description} />
          ) : (
            "No Description Added"
          )}
        </div>

        <ProductTab product={product} />
      </div>
    </section>
  );
}
