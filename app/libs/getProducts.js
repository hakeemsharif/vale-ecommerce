import getBase64 from "@/app/libs/getLocalBase64";

export async function getProducts() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/api/products?populate=*`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    // const data = await res.json();
    const { data } = await res.json();
    const dataWithBlur = await Promise.all(
      data.map(async (item) => ({
        ...item,
        blurDataURL: await getBase64(item.imageURL),
      }))
    );

    // return data.data;
    return dataWithBlur;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}