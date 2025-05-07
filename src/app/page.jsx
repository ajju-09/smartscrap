'use client'

import Charts from "@/components/Charts";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <Hero2 />
    <Charts />
    <Feedback />
    {/* <Footer /> */}
   </>
  );
}
