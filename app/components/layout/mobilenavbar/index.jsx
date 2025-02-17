"use client";

import style from "./mobilenav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@/app/assets/icons/cross.svg";
import logo from "@/app/assets/logo/logo.png";
import Image from "next/image";

export default function MobileBar({ isSidebarOpen, hideSidebar }) {
  const currentPath = usePathname();

  return (
    <>
      <nav className={`${style.mobile_nav} ${isSidebarOpen ? style.open : ""}`}>
        <div className={style.header}>
          <Link href="/" onClick={hideSidebar}>
            <Image src={logo} alt="Website Logo" width={100} quality={100} />
          </Link>

          <Image onClick={hideSidebar} src={CloseIcon} alt="Website Logo" />
        </div>

        <div className={style.container}>
          <div className={style.links}>
            <ul>
              <li>
                <Link
                  href="/"
                  className={currentPath === "/" ? style.active : style.link}
                  onClick={hideSidebar}>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className={
                    currentPath.startsWith("/products")
                      ? style.active
                      : style.link
                  }
                  onClick={hideSidebar}>
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/inspiration"
                  className={currentPath === "/inspiration" ? style.active : style.link}
                  onClick={hideSidebar}>
                  Inspiration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
