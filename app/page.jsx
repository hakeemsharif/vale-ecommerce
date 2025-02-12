import Hero from "./components/layout/sections/hero";
import Reinsurance from "./components/layout/sections/reinsurance";
import NewArrivals from "./components/layout/sections/newarrivals";
import Products from "./components/layout/sections/products";
import Inspiration from "./components/layout/sections/inspiration";
import NewsLetter from "./components/layout/sections/newsletter";

export default function Home() {
  return (
    <main>
        <Hero />
        <Reinsurance />
        <NewArrivals />
        <Products />
        <Inspiration />
        <NewsLetter />
    </main>
  );
}
