"use client";

// Icons
import CartIcon from "@/app/assets/icons/cart.svg";
import CartFillIcon from "@/app/assets/icons/cart-fill.svg";
import UserIcon from "@/app/assets/icons/user.svg";
import MenuIcon from "@/app/assets/icons/menu.svg";
import logo from "@/app/assets/logo/logo.png";

// Package
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Imports
import style from "./navbar.module.scss";
import MobileBar from "../mobilenavbar";
import useSnipcartCount from "@/app/hooks/useSnipcartCount";
import useMobileNav from "@/app/hooks/useMobileNav";

export default function Navbar() {
  const currentPath = usePathname();
  const { cart } = useSnipcartCount();
  const { isSidebarOpen, showSidebar, hideSidebar } = useMobileNav();
  const cartHasItems = cart.items.count !== 0;

  return (
    <header>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <Link href="/">
            <Image src={logo} alt="Website Logo" width={100} quality={100} priority />
          </Link>
        </div>

        <div className={style.links}>
          <ul>
            <li>
              <Link
                href="/"
                className={currentPath === "/" ? style.active : style.link}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={
                  currentPath.startsWith("/products")
                    ? style.active
                    : style.link}>
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/inspiration"
                className={
                  currentPath === "/inspiration" ? style.active : style.link}>
                Inspiration
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.nav_right}>
          <ul>
            <li>
              <Image
                src={UserIcon}
                alt="User Icon"
                className="snipcart-customer-signin"/>
            </li>
            <li>
              <div className={style.container}>
                {/* <span className={`${style.count} snipcart-items-count`}></span> */}
                <Image
                  className="snipcart-checkout"
                  src={cartHasItems ? CartFillIcon : CartIcon}
                  alt="Cart Icon"/>
              </div>
            </li>
            <li className={style.mobile_icon} onClick={showSidebar}>
              <Image src={MenuIcon} alt="User Icon" />
            </li>
          </ul>
        </div>
      </nav>

      <MobileBar
        isSidebarOpen={isSidebarOpen}
        hideSidebar={hideSidebar}
        showSidebar={showSidebar}
      />
    </header>
  );
}