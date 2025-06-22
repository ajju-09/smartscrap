"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Button } from "./ui/button";
import { ScrollAnimation } from "./animation";
import { Meteors } from "./magicui/meteors";
import Link from "next/link";

const Hero = () => {
  const phrases = [
    "Old Mobile Phones",
    "Broken Laptops",
    "Used Batteries",
    "E-Waste Responsibly",
  ];

  const images = [assets.hero, assets.hero2, assets.hero3];

  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-2 md:py-8">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Meteors number={100} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
        {/* Image Section */}
        <div className="order-1 md:order-2 flex justify-center">
          <Image
            src={images[currentImage]}
            alt="E-waste recycling"
            className="rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
            priority
          />
        </div>

        {/* Text Section */}
        <ScrollAnimation>
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Find the Right Place to <br />
              Recycle Your "
              <span className="text-green-600 underline">{phrases[index]}</span>
              "
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
              Connecting you with certified e-waste facilities in your area to
              keep the planet green.
            </p>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;
