import Image from "next/image";
import Navbar from "./Navbar/navbar.js";
import Hero from "./Hero/hero.js";
import Product from "./Product/product.js";
import Testimonial from "./Testimonial/testimonial.js";
import Demos from "./Demos/demos.js";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Testimonial />
    </div>
  );
}
