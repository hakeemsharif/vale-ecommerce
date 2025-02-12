import style from "./inspiration.module.scss";
import Image from "next/image";
import GalleryImage1 from "@/app/assets/images/slide1.webp";
import GalleryImage2 from "@/app/assets/images/slide2.webp";
import GalleryImage3 from "@/app/assets/images/slide3.webp";
import SectionHeader from "@/app/components/common/sectionheader";

export default function Inspiration() {
  return (
    <section className="main-sections">
      <div className={style.images}>
        <SectionHeader title="Inspiration" url="inspiration" />

        <div className={style.gallery}>
          <Image src={GalleryImage1} alt="Gallery Image" quality={100} />
          <Image src={GalleryImage2} alt="Gallery Image" quality={100} />
          <Image src={GalleryImage3} alt="Gallery Image" quality={100} />
        </div>
      </div>
    </section>
  );
}