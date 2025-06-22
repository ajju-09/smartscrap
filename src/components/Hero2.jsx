"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { assets } from "@/assets/assets";
import { ScrollAnimation } from "./animation";

const Hero2 = () => {
  const sliderdata = [
    {
      id: 1,
      image: assets.phone,
      title: "Old Smart Phones",
      Description:
        "Safely dispose of unused or broken mobile phones to recover rare earth metals and reduce toxic waste.",
    },
    {
      id: 2,
      image: assets.laptops,
      title: "Broken Laptops",
      Description:
        "Recycle laptops to keep heavy metals and plastic out of landfills. Some parts may also be refurbished or reused.",
    },
    {
      id: 3,
      image: assets.batteries,
      title: "Used Batteries",
      Description:
        "Batteries contain harmful chemicals like lead and mercury. Recycle them to prevent soil and water contamination.",
    },
    {
      id: 4,
      image: assets.tv,
      title: "Televisions & Monitors",
      Description:
        "CRTs, LCDs, LEDs—can leak toxic chemicals if not properly recycled.",
    },
    {
      id: 5,
      image: assets.cables,
      title: "Cables & Wires",
      Description:
        "USB, HDMI, power cords, extension cables—often contain copper.",
    },
    {
      id: 6,
      image: assets.printer,
      title: "Printers & Scanners",
      Description:
        "Often left unused and contain both plastic and metal parts.",
    },
    {
      id: 7,
      image: assets.consoles,
      title: "Gaming Consoles",
      Description: "Old PlayStations, Xboxes, controllers, VR sets.",
    },
    {
      id: 8,
      image: assets.kitchen,
      title: "Kitchen Appliances",
      Description:
        "Includes microwaves, toasters, blenders with electronic parts.",
    },
    {
      id: 9,
      image: assets.drives,
      title: "Hard Drives",
      Description:
        "External hard drives, flash drives—need safe data destruction.",
    },
    {
      id: 10,
      image: assets.routers,
      title: "Modems & Routers",
      Description: "Outdated Wi-Fi equipment that piles up quickly.",
    },
  ];

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="min-h-screen px-4 pt-4 md:pt-8">
      <div className="flex flex-col items-center justify-center">
        {/* Title with background glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 z-0 bg-[#6f2dbd] blur-2xl"></div>
          <ScrollAnimation>
            <h1 className="text-3xl md:text-5xl font-bold text-center relative z-10">
              E-Waste Like
            </h1>
          </ScrollAnimation>
        </div>

        {/* Carousel Content */}
        <Carousel
          dir="ltr"
          className="w-full max-w-7xl"
          plugins={[plugin.current]}
          loop
        >
          <CarouselContent className="flex gap-6 px-2 w-full">
            {sliderdata.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex justify-center basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 transition duration-500 ease-in-out hover:scale-105"
              >
                <Card className="bg-black rounded-2xl w-full max-w-xs overflow-hidden border-none shadow-[0_8px_30px_rgba(188,0,221,0.3)] hover:shadow-[0_12px_40px_rgba(188,0,221,0.4)] transition-shadow duration-300">
                  <ScrollAnimation>
                    <CardHeader className="text-white font-bold text-xl text-center underline">
                      {item.title}
                    </CardHeader>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-60 object-cover rounded-xl"
                    />
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <CardDescription className="text-white font-medium p-4 text-sm sm:text-base">
                      {item.Description}
                    </CardDescription>
                  </ScrollAnimation>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero2;
