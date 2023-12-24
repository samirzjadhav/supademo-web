import Image from "next/image";
import Navbar from "./Navbar/navbar.js";
import Hero from "./Hero/hero.js";
import Company from "./Company/companies.js";
import Product from "./Product/product.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <Product />
    </div>
  );
}
