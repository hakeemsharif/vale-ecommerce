import style from "./reinsurance.module.scss";
import Image from "next/image";
import ShippingIcon from "@/app/assets/icons/shipping.svg"
import ReturnIcon from "@/app/assets/icons/return.svg"
import SupportIcon from "@/app/assets/icons/support.svg"
import SecureIcon from "@/app/assets/icons/secure.svg"

export default function Reinsurance() {
  return (
    <section className="main-sections">
      <div className={style.reinsurance}>
        <div className={style.card}>
            <Image src={ShippingIcon} alt="Shipping Icon" />
            <span>Free Shipping Over PHP 5,000</span>
        </div>
        <div className={style.card}>
            <Image src={ReturnIcon} alt="Shipping Icon" />
            <span>Free Returns</span>
        </div>
        <div className={style.card}>
            <Image src={SupportIcon} alt="Shipping Icon" />
            <span>24/7 Support</span>
        </div>
        <div className={style.card}>
            <Image src={SecureIcon} alt="Shipping Icon" />
            <span>Safe & Secure Payment</span>
        </div>
      </div>
    </section>
  );
}
