import getBase64 from "@/app/libs/getLocalBase64";

export async function getInspiration(page) {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/api/inspirations?populate=*`);
    console.log(page)
    if (!res.ok) {
      throw new Error(`Failed to fetch images: ${res.status}`);
    }

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
    console.error("Error fetching images:", error);
    throw new Error("Error fetching images");
  }
}