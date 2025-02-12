import Image from "next/image";
import style from "./hero.module.scss";
import HeroImage from "@/app/assets/images/hero.webp";

export default function Hero() {
  return (
    <section>
      <div className={style.hero}>
        <Image 
          src={HeroImage} 
          alt="Hero Image" 
          fill
          priority
          quality={100}
          placeholder="blur"
        />
        <div className={style.tagline}><h1>Space to breath</h1></div>
      </div>
    </section>
  );
}