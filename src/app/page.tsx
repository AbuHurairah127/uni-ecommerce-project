"use client";
import { Sora } from "next/font/google";
import Hero from "@/sections/home/hero/Hero";
import Promotions from "@/sections/home/promotions/Promotions";
import Newsletter from "@/sections/home/newsletter/Newsletter";
import Products from "@/sections/home/products/Products";
import TopText from "@/components/home/topText/TopText";
const sora = Sora({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={sora.className}>
      <TopText />
      <Hero />
      <Promotions />
      <Products />
      <Newsletter />
    </main>
  );
}
