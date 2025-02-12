import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import SnipCart from "./components/common/SnipCart";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const generalSans = localFont({
  src: "./fonts/GeneralSans-Regular.otf",
  variable: "--font-gs-regular",
})

const generalSansLight = localFont({
  src: "./fonts/GeneralSans-Light.otf",
  variable: "--font-gs-light",
})

const generalSansMedium = localFont({
  src: "./fonts/GeneralSans-Medium.otf",
  variable: "--font-gs-medium",
})

const generalSansSemiBold = localFont({
  src: "./fonts/GeneralSans-Semibold.otf",
  variable: "--font-gs-semibold",
})

const generalSansBold = localFont({
  src: "./fonts/GeneralSans-Bold.otf",
  variable: "--font-gs-bold",
})

export const metadata = {
  title: 'VALE | Ecommerce Website',
  description: 'A simple ecommerce website using Next.JS, Strapi, and Snipcart',
  keywords: ['next.js', 'react', 'metadata'],
  authors: [{ name: 'Hakeem S.' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  },
  appleWebApp: {
    title: 'Vale',
    statusBarStyle: 'default'
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} ${generalSansLight.variable} ${generalSansSemiBold.variable} ${generalSansBold.variable} ${generalSansMedium.variable}`}>
        <SnipCart />
        <NextTopLoader color="#3944BC" showSpinner={false} />
        <Navbar />
            {children}
        <Footer/>
      </body>
    </html>
  );
}
