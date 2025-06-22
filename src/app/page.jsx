"use client";

import Charts from "@/components/Charts";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "../components/Navbar";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <Charts />
      <Feedback />
      <Footer />
    </>
  );
}
