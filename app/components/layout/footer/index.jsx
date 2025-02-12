import style from "./footer.module.scss";
import logo from "@/app/assets/logo/logo.png";
import Link from "next/link";
import Image from "next/image";
import IGlogo from "@/app/assets/logo/IG.png";
import YTlogo from "@/app/assets/logo/YT.png";
import TTlogo from "@/app/assets/logo/TikTok.png";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.logo}>
          <Link href="/">
            <Image src={logo} alt="Website Logo" width={200} quality={100} />
          </Link>
        </div>

        <div className={style.links}>
          <ul>
            <li>
              <Link href="/">Beds</Link>
            </li>

            <li>
              <Link href="/">Cabinets</Link>
            </li>

            <li>
              <Link href="/">Chairs</Link>
            </li>

            <li>
              <Link href="/">Sofa</Link>
            </li>

            <li>
              <Link href="/">Tables</Link>
            </li>
          </ul>
        </div>

        <div className={style.social_media}>
          <ul>
            <li>
              <Image src={IGlogo} alt="Instagram Icon" />
            </li>

            <li>
              <Image src={YTlogo} alt="Youtube Icon" />
            </li>

            <li>
              <Image src={TTlogo} alt="Tiktok Icon" />
            </li>
          </ul>
        </div>
      </footer>

      <div className={style.p_footer}>
        <p>© <b>VALE</b> 2025, All Rights Reserved</p>
      </div>
    </>
  );
}
