"use client";
import React, { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { assets } from "@/assets/assets";
import { Card, CardDescription, CardHeader } from "./ui/card";
import Image from "next/image";
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
    <section className="min-h-screen px-4 md:pt-8 pt-4">
      <div className="flex items-center justify-center flex-col">
        {/* Title with decorative background */}
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-[#6f2dbd] blur-2xl"></div>
          <ScrollAnimation>
          <h1 className="md:text-5xl text-3xl text-center font-bold mb-18 relative z-10">
            E-Waste Like
          </h1>
          </ScrollAnimation>
        </div>

        {/* Carousel */}
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
                className="flex justify-center basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 hover:scale-110 transition duration-500 ease-in-out"
              >
                
                {/* Card with shadow effect */}
                <Card className="overflow-hidden border-none rounded-2xl w-full max-w-xs bg-black shadow-[0_8px_30px_rgba(188,0,221,0.3)] hover:shadow-[0_12px_40px_rgba(188,0,221,0.4)] transition-shadow duration-300">
                <ScrollAnimation>
                  <CardHeader className="font-bold text-xl text-center underline text-white">
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
                  <CardDescription className="p-4 text-sm sm:text-base font-medium text-white">
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
