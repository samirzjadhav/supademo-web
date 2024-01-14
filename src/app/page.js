import Image from "next/image";
import Navbar from "./Navbar/navbar.js";
import Hero from "./Hero/hero.js";
import Company from "./Company/companies.js";
import Product from "./Product/product.js";
import Testimonial from "./Testimonial/testimonial.js";
import Demos from "./Demos/demos.js";
import Percent from "./Percent/percent.js";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <Product />
      <Testimonial />
      <Demos />
      <Percent />
    </div>
  );
}
