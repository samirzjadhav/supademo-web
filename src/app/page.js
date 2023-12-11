import Image from "next/image";
import Navbar from "./Navbar/navbar.js";
import Hero from "./Hero/hero.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
