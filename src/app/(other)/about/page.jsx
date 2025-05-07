'use client'
import { assets, Box, File, Location } from "@/assets/assets";
import { ScrollAnimation } from "@/components/animation";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-10 space-y-10 bg-black text-white">
        {/* Heading Section - vertically centered in view */}
        <ScrollAnimation>
        <div className="relative w-full flex items-center justify-center min-h-[60vh] max-w-4xl text-center ">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={assets.aboutimg}
              alt="About Background"
              layout="fill"
              objectFit="cover"
              className="opacity-30 rounded-3xl blur-xs"
            />
          </div>

          {/* Foreground Text */}
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#fbff12] animate-bounce">
              About SmartScrap
            </h1>
            <p className="text-lg md:text-xl text-[#70e000]">
              Making E-Waste Disposal Easy, Safe and Accessible.
            </p>
          </div>
        </div>
        </ScrollAnimation>

        {/* Remaining Content */}
        <div className="w-full max-w-4xl space-y-10">
          <div className="w-full border-2 border-[#80ffdb] rounded-2xl hover:border-[#4ea8de] hover:scale-105 transition-transform duration-500 ease-in-out shadow-2xl shadow-[#caf0f8] hover:shadow-[#0077b6]">
            <ScrollAnimation>
            <h2 className="text-2xl font-semibold px-2 m-3">Our Mission</h2>
            <p className="px-2 m-3 py-3 ">
              SmartScrap is dedicated to promoting <strong>sustainable</strong>{" "}
              e-waste disposal by connecting individuals with certified
              recycling facilities. Our goal is to reduce landfill waste,
              protect the environment, and make recycling easy for everyone.
            </p>
            </ScrollAnimation>
          </div>

          <div className="border-2 border-[#ecbcfd] hover:border-[#7b2cbf] rounded-2xl shadow-2xl shadow-[#ecbcfd] hover:shadow-[#7b2cbf] hover:scale-110 transition-transform duration-700 ease-in-out">
            <ScrollAnimation>
            <h2 className="text-2xl font-semibold m-4">How It Works</h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <ScrollAnimation>
              <div className="border-2 border-[#2ec4b6] m-3 rounded-3xl flex flex-col items-center justify-evenly px-3 py-2">
                <span>{<Location />}</span> <strong>Locate</strong>
                <p>Find nearby e-waste centers using our map.</p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation>
              <div className="border-2 border-[#e71d36] m-3 rounded-3xl flex flex-col items-center justify-evenly px-3 py-2">
                <span>
                  <File />
                </span>{" "}
                <strong>Submit</strong>
                <p>Submit your e-waste type and quantity.</p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation>
              <div className="border-2 border-[#ff9f1c] m-3 rounded-3xl flex flex-col items-center justify-evenly px-3 py-2">
                <span>
                  <Box />
                </span>{" "}
                <strong>Drop off / Schedule</strong>
                <p>Visit or schedule a pickup (if available).</p>
              </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="border-2 border-[#ffccd5] hover:border-[#c9184a] rounded-2xl shadow-2xl shadow-[#ffccd5] hover:shadow-[#c9184a] hover:scale-110 transition-transform duration-700 ease-in-out">
            <ScrollAnimation>
            <h2 className="text-2xl font-semibold m-4">
              Why E-Waste Recycling Is Important
            </h2>
            </ScrollAnimation>
            <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="list-disc list-inside m-3 px-2 py-2">
                <li>Prevents toxic pollution</li>
                <li>Supports circular economy</li>
                <li>Reduces landfill usage</li>
              </ul>
              <ul className="list-disc list-inside m-3 px-2 py-2">
                <li>Recovers valuable materials</li>
                <li>Promotes responsible disposal</li>
              </ul>
            </div>
            </ScrollAnimation>
          </div>

         
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 ">Join the Movement</h3>
            <Button className="bg-green-500 text-white hover:bg-green-600">
              <Link href="/recycle">Start Recycling Movement</Link>
            </Button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default about;
