export async function getProducts() {
    try {
      const res = await fetch(`${process.env.STRAPI_URL}/api/products?populate=*`);
      
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status}`);
      }
      
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }